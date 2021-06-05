// **************************** PAGE BUTTONS FUNCTIONALITY ****************************

$("#page1").show();
$("#page2PSR").hide();
$("#page2DMFT").hide();
$("#page3DMFT").hide();
$("#page3DMFT-decid").hide();


// *************** PAGE1

$("#page1-PSR-btn").click(function () {
    $("#page1").hide();
    $("#page2PSR").show();
});

$("#page1-DMFT-btn").click(function () {
    $("#page1").hide();
    $("#page2DMFT").show();
});


// *************** PAGE2 PSR

$("#analysis-btn").click(function () {
    $("#page2PSR").hide();
    $("#page1").show();
});
// il bottone AVANTI è gestito da un href


// *************** PAGE2 DMFT

$("#page2DMFT-nxt-btn").click(function () {

    if ($('input:radio[id=dec-input]:checked').val() == "") {
        var dmftPage3 = "#page3DMFT-decid";
    };

    if ($('input:radio[id=adul-input]:checked').val() == "") {
        var dmftPage3 = "#page3DMFT";
    };

    $("#page2DMFT").hide();
    $(dmftPage3).show();

});

$("#analysis-btn2").click(function () {
    $("#page2DMFT").hide();
    $("#page1").show();
});


// *************** PAGE3 DMFT (adul and decid)

$("#page3DMFT-prv-btn").click(function () {
    $("#page3DMFT").hide();
    $("#page2DMFT").show();
});

$("#analysis-btn3").click(function () {
    $("#page3DMFT").hide();
    $("#page1").show();
});

$("#page3DMFT-decid-prv-btn").click(function () {
    $("#page3DMFT-decid").hide();
    $("#page2DMFT").show();
});

$("#analysis-btn4").click(function () {
    $("#page3DMFT-decid").hide();
    $("#page1").show();
});
// il bottone AVANTI è gestito da un href









// **************************** EXAM DATE TODAY PRECOMPILATION ****************************

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
$("#exam-date").attr("value", today);









// **************************** AGE PRECOMPILATION ****************************

$("#birth-date").on('keyup change', function () {
    setAge();
});

function setAge() {
    var birthDate = $("#birth-date").val();
    birthDate = birthDate.replace('-', '').replace('-', '');
    var yyyyBirth = Number(birthDate.substr(0, 4));
    var mmBirth = Number(birthDate.substr(4, 2)) - 1;
    var ddBirth = Number(birthDate.substr(6, 2));
    var age = yyyy - yyyyBirth;
    if (mm < mmBirth || (mm == mmBirth && dd < ddBirth)) {
        age--;
    };

    if (yyyyBirth > 1800) {
        $("#age").val(age);
        $("#age-page23").val(age);
    };
}











// **************************** PAGE23 PRECOMPILATION ****************************
// il codice seguente fa in modo che gli input readonly presenti nelle pagine successive
// alla prima vengano compilati con i dati inseriti nella prima pagina

$("#pname-orig").on("keyup change", function () {
    $("#pname-page23").val($("#pname-orig").val());
    $("#pname-page23-bis").val($("#pname-orig").val());
    $("#pname-page23-tris").val($("#pname-orig").val());
    $("#pname-page23-quad").val($("#pname-orig").val());
});

$("#oname-orig").on("keyup change", function () {
    $("#oname-page23").val($("#oname-orig").val());
});

$("#age").on("keyup change", function () {
    $("#age-page23").val($("#age").val());
});


var todayV2 = dd + " / " + mm + " / " + yyyy;

$("#exam-date-page23").val(todayV2);
$("#exam-date-page23-bis").val(todayV2);
$("#exam-date-page23-tris").val(todayV2);
$("#exam-date-page23-quad").val(todayV2);

$("#exam-date").on("keyup change", function () {
    var exdate = $("#exam-date").val();
    dd = exdate.slice(8, 10);
    mm = exdate.slice(5, 7);
    yyyy = exdate.slice(0, 4);
    exdate = dd + " / " + mm + " / " + yyyy;
    $("#exam-date-page23").val(exdate);
    $("#exam-date-page23-bis").val(exdate);
    $("#exam-date-page23-tris").val(exdate);
    $("#exam-date-page23-quad").val(exdate);

    if ($("#birth-date").val() != undefined) {
        setAge();
    };
});










// **************************** DMFT SECOND PAGE TEETH ****************************

teethChecker();

$("#dec-input, #adul-input").on("change", function () {
    teethChecker();
});


function teethChecker() {
    if ($('input:radio[id=dec-input]:checked').val() == "") {
        $(".tee-img1").css("opacity", "1")
    } else {
        $(".tee-img1").css("opacity", "0.2")
    };
    if ($('input:radio[id=adul-input]:checked').val() == "") {
        $(".tee-img2").css("opacity", "1")
    } else {
        $(".tee-img2").css("opacity", "0.2")
    };
};










// **************************** PSR PAGE 2 INPUTS CONTROL ****************************

$(".teeth-inputs").on('change keyup', function () {
    if ($(this).val() > 4) {
        $(this).val('4*');
    }
    if ($(this).val() < 0) {
        $(this).val('0');
    }
});








// **************************** PSR TEETH GROUPS COLORATION ****************************

var input1 = "0";
var input2 = "0";
var input3 = "0";
var input4 = "0";
var input5 = "0";
var input6 = "0";

$("#input-one").on('keyup change', function () {
    input1 = psrSelector($(this).val(), 1);
});

$("#input-two").on('keyup change', function () {
    input2 = psrSelector($(this).val(), 2);
});

$("#input-three").on('keyup change', function () {
    input3 = psrSelector($(this).val(), 3);
});

$("#input-four").on('keyup change', function () {
    input4 = psrSelector($(this).val(), 4);
});

$("#input-five").on('keyup change', function () {
    input5 = psrSelector($(this).val(), 5);
});

$("#input-six").on('keyup change', function () {
    input6 = psrSelector($(this).val(), 6);
});


function psrSelector(inputValue, num) {

    if (inputValue == "4*") {
        psrResult = "5";
    } else {
        psrResult = inputValue;
    };

    teethColoration(inputValue, num);

    return psrResult;
};


function teethColoration(inputValue, groupNumber) {

    var selection = ".group" + groupNumber + " #target";

    if (inputValue == "0") {
        $(selection).removeClass().addClass("teeth-ext");
    }
    if (inputValue == "1") {
        $(selection).removeClass().addClass("state-one");
    }
    if (inputValue == "2") {
        $(selection).removeClass().addClass("state-two");
    }
    if (inputValue == "3") {
        $(selection).removeClass().addClass("state-three");
    }
    if (inputValue == "4") {
        $(selection).removeClass().addClass("state-four");
    }
    if (inputValue == "4*") {
        $(selection).removeClass().addClass("state-four");
    }
};












// **************************** DMFT ADULT TEETH COLORATION AND COUNTER ****************************

var adulArray = ["0", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];

$("#adul .col-5 select").on("change", function () {
    dmftColoration(this.id, $(this).val());
});


function dmftColoration(inputId, value) {

    var teethId = "#" + inputId.slice(5);

    if (value == "-") {
        $(teethId).removeClass().addClass("dmft-none");
        adulArray[inputId.slice(10)] = "-";
    };
    if (value == "D") {
        $(teethId).removeClass().addClass("dmft-d");
        adulArray[inputId.slice(10)] = "D";
    };
    if (value == "M") {
        $(teethId).removeClass().addClass("dmft-m");
        adulArray[inputId.slice(10)] = "M";
    };
    if (value == "F") {
        $(teethId).removeClass().addClass("dmft-f");
        adulArray[inputId.slice(10)] = "F";
    };

    dmftCounter();
};


function dmftCounter() {

    var leftNones = 0;
    var leftDs = 0;
    var leftMs = 0;
    var leftFs = 0;
    var rightNones = 0;
    var rightDs = 0;
    var rightMs = 0;
    var rightFs = 0;

    for (var i = 0; i < 14; i++) {

        var dmftValue = $("#dmft-teeth" + (i + 1)).val();

        if (dmftValue == "-") {
            leftNones++;
        }
        if (dmftValue == "D") {
            leftDs++;
        }
        if (dmftValue == "M") {
            leftMs++;
        }
        if (dmftValue == "F") {
            leftFs++;
        }
    };

    for (var i = 14; i < 28; i++) {

        var dmftValue = $("#dmft-teeth" + (i + 1)).val();

        if (dmftValue == "-") {
            rightNones++;
        }
        if (dmftValue == "D") {
            rightDs++;
        }
        if (dmftValue == "M") {
            rightMs++;
        }
        if (dmftValue == "F") {
            rightFs++;
        }
    };

    $("#left #counter-none .counter-square").html(leftNones);
    $("#left #counter-d .counter-square").html(leftDs);
    $("#left #counter-m .counter-square").html(leftMs);
    $("#left #counter-f .counter-square").html(leftFs);

    $("#right #counter-none .counter-square").html(rightNones);
    $("#right #counter-d .counter-square").html(rightDs);
    $("#right #counter-m .counter-square").html(rightMs);
    $("#right #counter-f .counter-square").html(rightFs);

    $("#adul-counter #counter-none .counter-square").html(rightNones + leftNones);
    $("#adul-counter #counter-d .counter-square").html(rightDs + leftDs);
    $("#adul-counter #counter-m .counter-square").html(rightMs + leftMs);
    $("#adul-counter #counter-f .counter-square").html(rightFs + leftFs);

    $("#adul-final").html(rightDs + leftDs + rightMs + leftMs + rightFs + leftFs);
};












// **************************** DMFT DECID TEETH COLORATION AND COUNTER ****************************

var decidArray = ["0", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];

$("#decid .col-4 select").on("change", function () {
    dmftDecidColoration(this.id, $(this).val());
});


function dmftDecidColoration(inputIdDecid, value) {

    var teethIdDecid = "#" + inputIdDecid.slice(5);

    if (value == "-") {
        $(teethIdDecid).removeClass().addClass("dmft-none");
        decidArray[inputIdDecid.slice(16)] = "-";
    };
    if (value == "D") {
        $(teethIdDecid).removeClass().addClass("dmft-d");
        decidArray[inputIdDecid.slice(16)] = "D";
    };
    if (value == "M") {
        $(teethIdDecid).removeClass().addClass("dmft-m");
        decidArray[inputIdDecid.slice(16)] = "M";
    };
    if (value == "F") {
        $(teethIdDecid).removeClass().addClass("dmft-f");
        decidArray[inputIdDecid.slice(16)] = "F";
    };

    dmftCounterDecid();
};



function dmftCounterDecid() {

    var leftNonesDecid = 0;
    var leftDsDecid = 0;
    var leftMsDecid = 0;
    var leftFsDecid = 0;
    var rightNonesDecid = 0;
    var rightDsDecid = 0;
    var rightMsDecid = 0;
    var rightFsDecid = 0;

    for (var i = 0; i < 10; i++) {

        var dmftValueDecid = $("#dmft-small-teeth" + (i + 1)).val();

        if (dmftValueDecid == "-") {
            leftNonesDecid++;
        }
        if (dmftValueDecid == "D") {
            leftDsDecid++;
        }
        if (dmftValueDecid == "M") {
            leftMsDecid++;
        }
        if (dmftValueDecid == "F") {
            leftFsDecid++;
        }
    };

    for (var i = 10; i < 20; i++) {

        var dmftValueDecid = $("#dmft-small-teeth" + (i + 1)).val();

        if (dmftValueDecid == "-") {
            rightNonesDecid++;
        }
        if (dmftValueDecid == "D") {
            rightDsDecid++;
        }
        if (dmftValueDecid == "M") {
            rightMsDecid++;
        }
        if (dmftValueDecid == "F") {
            rightFsDecid++;
        }
    };

    $("#left-decid #counter-none .counter-square").html(leftNonesDecid);
    $("#left-decid #counter-d .counter-square").html(leftDsDecid);
    $("#left-decid #counter-m .counter-square").html(leftMsDecid);
    $("#left-decid #counter-f .counter-square").html(leftFsDecid);

    $("#right-decid #counter-none .counter-square").html(rightNonesDecid);
    $("#right-decid #counter-d .counter-square").html(rightDsDecid);
    $("#right-decid #counter-m .counter-square").html(rightMsDecid);
    $("#right-decid #counter-f .counter-square").html(rightFsDecid);

    $("#decid-counter #counter-none .counter-square").html(rightNonesDecid + leftNonesDecid);
    $("#decid-counter #counter-d .counter-square").html(rightDsDecid + leftDsDecid);
    $("#decid-counter #counter-m .counter-square").html(rightMsDecid + leftMsDecid);
    $("#decid-counter #counter-f .counter-square").html(rightFsDecid + leftFsDecid);

    $("#decid-final").html(rightDsDecid + leftDsDecid + rightMsDecid + leftMsDecid + rightFsDecid + leftFsDecid);
};













// **************************** DATA TRANSMISSION TO REPORTS ****************************


$("#page2PSR-nxt-btn").click(function () {
    var after = Math.max(input1, input2, input3, input4, input5, input6);
    dataTransmission("reports/psr", after);
});

$("#page3DMFT-nxt-btn").click(function () {
    dataTransmission("reports/dmft-", "adul");
});

$("#page3DMFT-nxt-btn-decid").click(function () {
    dataTransmission("reports/dmft-", "decid");
});





function dataTransmission(report, end) {

    var oname = $("#oname-orig").val();
    var pname = $("#pname-orig").val();
    var ageX = $("#age").val();
    var exSmoke = $("#ex-smoke").val();


    if ($("#daily-freq").val() == "-") {
        var freq = "";
    } else {
        var freq = $("#daily-freq").val();
    };

    if ($("#collu-type").val() == "-") {
        var colluType = "";
    } else {
        var colluType = $("#collu-type").val();
    };


    var exdate = $("#exam-date").val();
    var day = exdate.slice(8, 10);
    var month = exdate.slice(5, 7);
    var year = exdate.slice(0, 4);
    exdate = day + " / " + month + " / " + year;


    if ($("#birth-date").val() == "") {
        var bdate = "";
    } else {
        var bdate = $("#birth-date").val();
        var bday = bdate.slice(8, 10);
        var bmonth = bdate.slice(5, 7);
        var byear = bdate.slice(0, 4);
        bdate = bday + " / " + bmonth + " / " + byear;
    };


    var sex = radioReceiver("male-sex", "female-sex", "male", "female");
    var diab = radioReceiver("diab-yes", "diab-no", "yes", "no");
    var smoke = radioReceiver("smoke-yes", "smoke-no", "yes", "no");
    var svapo = radioReceiver("svapo-yes", "svapo-no", "yes", "no");
    var brush = radioReceiver("brush-elet", "brush-manu", "e", "m");
    var paste = radioReceiver("paste-yes", "paste-no", "yes", "no");


    var wire = radioTriReceiver("wire");
    var scovo = radioTriReceiver("scovo");
    var collu = radioTriReceiver("collu");


    var path1 = report + end + ".html" + "?" + "alpha=" + end + "&oname=" + oname + "&pname=" + pname + "&bdate=" + bdate;
    var path2 = "&ageX=" + ageX + "&sex=" + sex + "&diab=" + diab + "&exSmoke=" + exSmoke + "&svapo=" + svapo;
    var path3 = "&freq=" + freq + "&brush=" + brush + "&paste=" + paste + "&wire=" + wire + "&scovo=" + scovo;
    var path4 = "&collu=" + collu + "&collutype=" + colluType + "&exdate=" + exdate + "&smoke=" + smoke;
    var path5 = "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input4=" + input4;
    var path6 = "&input5=" + input5 + "&input6=" + input6 + "&adul1=" + adulArray[1] + "&adul2=" + adulArray[2];
    var path7 = "&adul3=" + adulArray[3] + "&adul4=" + adulArray[4] + "&adul5=" + adulArray[5] + "&adul6=" + adulArray[6];
    var path8 = "&adul7=" + adulArray[7] + "&adul8=" + adulArray[8] + "&adul9=" + adulArray[9] + "&adul10=" + adulArray[10];
    var path9 = "&adul11=" + adulArray[11] + "&adul12=" + adulArray[12] + "&adul13=" + adulArray[13] + "&adul14=" + adulArray[14];
    var path10 = "&adul15=" + adulArray[15] + "&adul16=" + adulArray[16] + "&adul17=" + adulArray[17] + "&adul18=" + adulArray[18];
    var path11 = "&adul19=" + adulArray[19] + "&adul20=" + adulArray[20] + "&adul21=" + adulArray[21] + "&adul22=" + adulArray[22];
    var path12 = "&adul23=" + adulArray[23] + "&adul24=" + adulArray[24] + "&adul25=" + adulArray[25] + "&adul26=" + adulArray[26];
    var path13 = "&adul27=" + adulArray[27] + "&adul28=" + adulArray[28] + "&decid1=" + decidArray[1] + "&decid2=" + decidArray[2];
    var path14 = "&decid3=" + decidArray[3] + "&decid4=" + decidArray[4] + "&decid5=" + decidArray[5] + "&decid6=" + decidArray[6];
    var path15 = "&decid7=" + decidArray[7] + "&decid8=" + decidArray[8] + "&decid9=" + decidArray[9] + "&decid10=" + decidArray[10];
    var path16 = "&decid11=" + decidArray[11] + "&decid12=" + decidArray[12] + "&decid13=" + decidArray[13] + "&decid14=" + decidArray[14];
    var path17 = "&decid15=" + decidArray[15] + "&decid16=" + decidArray[16] + "&decid17=" + decidArray[17] + "&decid18=" + decidArray[18];
    var path18 = "&decid19=" + decidArray[19] + "&decid20=" + decidArray[20];

    var path = path1 + path2 + path3 + path4 + path5 + path6 + path7 + path8 + path9 + path10 + path11 + path12 + path13 + path14 + path15 + path16 + path17 + path18;

    $("#dataPathPsr").attr("href", path);
    $("#dataPathAdul").attr("href", path);
    $("#dataPathDecid").attr("href", path);
};


function radioReceiver(idOne, idTwo, valueOne, valueTwo) {

    if ($('input:radio[id=' + idOne + '-input]:checked').val() == "") {
        radioResult = valueOne;
    } else if ($('input:radio[id=' + idTwo + '-input]:checked').val() == "") {
        radioResult = valueTwo;
    } else {
        radioResult = "";
    };

    return radioResult;
};


function radioTriReceiver(onlyId) {

    if ($('input:radio[id=' + onlyId + '-day]:checked').val() == "") {
        triResult = "day";
    } else if ($('input:radio[id=' + onlyId + '-week]:checked').val() == "") {
        triResult = "week";
    } else if ($('input:radio[id=' + onlyId + '-never]:checked').val() == "") {
        triResult = "never";
    } else {
        triResult = "";
    };

    return triResult;
};









// **************************** DATA COLLECTION/INJECTION FROM PSR REPORT ****************************
// qui vanno inserite le querystring che vengono passate alla pagina 1 quando si torna indietro
// da un report, in modo che tutti gli input di pagina 1, 2 e 3 vengano precompilati. Altrimenti
// tornando indietro da un report, tutti i dati precedentemente inseriti vengono persi

const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

var prv = allData.get('prv');

if (prv) {
    myFunc(allData);
};


function myFunc(allData) {

    if (prv == "yes" || prv == "adul" || prv == "decid") {

        $("#page1").hide();

        if (prv == "yes") {
            $("#page2PSR").show();
        } else if (prv == "adul") {
            $("#page3DMFT").show();
        } else if (prv == "decid") {
            $("#page3DMFT-decid").show();
        };

        var queryParams = new URLSearchParams(window.location.search);
        queryParams.set("prv", "no");
        history.replaceState(null, null, "?" + queryParams.toString());
    };


    var deltaExDate = allData.get('exdate');
    var deltaDD = deltaExDate.slice(0, 2);
    var deltaMM = deltaExDate.slice(5, 7);
    var deltaYY = deltaExDate.slice(10);
    var deltaExDateV2 = deltaYY + "-" + deltaMM + "-" + deltaDD;
    $("#exam-date").val(deltaExDateV2);
    $("#exam-date-page23").val(deltaExDate);
    $("#exam-date-page23-bis").val(deltaExDate);
    $("#exam-date-page23-tris").val(deltaExDate);
    $("#exam-date-page23-quad").val(deltaExDate);


    var deltaBdate = allData.get('bdate');
    var deltaBD = deltaBdate.slice(0, 2);
    var deltaBM = deltaBdate.slice(5, 7);
    var deltaBY = deltaBdate.slice(10);
    deltaBdate = deltaBY + "-" + deltaBM + "-" + deltaBD;
    $("#birth-date").val(deltaBdate);


    var pname = allData.get('pname');
    $("#pname-orig").val(pname);
    $("#pname-page23").val(pname);
    $("#pname-page23-bis").val(pname);
    $("#pname-page23-tris").val(pname);
    $("#pname-page23-quad").val(pname);

    var oname = allData.get('oname');
    $("#oname-orig").val(oname);
    $("#oname-page23").val(oname);

    var ageX = allData.get('ageX');
    $("#age").val(ageX);
    $("#age-page23").val(ageX);

    var exSmoke = allData.get('exSmoke');
    $("#ex-smoke").val(exSmoke);

    var freq = allData.get('freq');
    $("#daily-freq").val(freq);

    var colluType = allData.get('collutype');
    $("#collu-type").val(colluType);

    radioCompiler(allData.get('sex'), "male", "female", "#male-sex-input", "#female-sex-input");
    radioCompiler(allData.get('diab'), "yes", "no", "#diab-yes-input", "#diab-no-input");
    radioCompiler(allData.get('smoke'), "yes", "no", "#smoke-yes-input", "#smoke-no-input");
    radioCompiler(allData.get('svapo'), "yes", "no", "#svapo-yes-input", "#svapo-no-input");
    radioCompiler(allData.get('brush'), "e", "m", "#brush-elet-input", "#brush-manu-input");
    radioCompiler(allData.get('paste'), "yes", "no", "#paste-yes-input", "#paste-no-input");

    radioTriCompiler(allData.get('wire'), "wire");
    radioTriCompiler(allData.get('scovo'), "scovo");
    radioTriCompiler(allData.get('collu'), "collu");

    input1 = psrTeeth(allData.get('input1'), 1, "#input-one");
    input2 = psrTeeth(allData.get('input2'), 2, "#input-two");
    input3 = psrTeeth(allData.get('input3'), 3, "#input-three");
    input4 = psrTeeth(allData.get('input4'), 4, "#input-four");
    input5 = psrTeeth(allData.get('input5'), 5, "#input-five");
    input6 = psrTeeth(allData.get('input6'), 6, "#input-six");


    for (var i = 1; i < 29; i++) {
        $("#dmft-teeth" + i).val(allData.get("adul" + i));
        dmftColoration("dmft-teeth" + i, allData.get("adul" + i));
    };

    for (var i = 1; i < 21; i++) {
        $("#dmft-small-teeth" + i).val(allData.get("decid" + i));
        dmftDecidColoration("dmft-small-teeth" + i, allData.get("decid" + i));
    };

};



function radioCompiler(data, value1, value2, id1, id2) {
    if (data == value1) {
        $(id1).attr("checked", "true");
    } else if (data == value2) {
        $(id2).attr("checked", "true");
    };
};

function radioTriCompiler(data, onlyId) {
    if (data == "day") {
        $("#" + onlyId + "-day").attr("checked", "true");
    } else if (data == "week") {
        $("#" + onlyId + "-week").attr("checked", "true");
    } else if (data == "never") {
        $("#" + onlyId + "-never").attr("checked", "true");
    };
};


function psrTeeth(data, num, id) {

    var inp = data;

    if (data == "5") {
        inp = "4*";
    } else if (data == "0") {
        inp = "";
    };

    teethColoration(inp, num);
    $(id).val(inp);
    return data;
};
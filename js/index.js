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
    if ($(this).val() == "4*") {
        input1 = "5";
    } else {
        input1 = $(this).val();
    };
    teethColoration($(this).val(), 1);
});

$("#input-two").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input2 = "5";
    } else {
        input2 = $(this).val();
    };
    teethColoration($(this).val(), 2);
});

$("#input-three").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input3 = "5";
    } else {
        input3 = $(this).val();
    };
    teethColoration($(this).val(), 3);
});

$("#input-four").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input4 = "5";
    } else {
        input4 = $(this).val();
    };
    teethColoration($(this).val(), 4);
});

$("#input-five").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input5 = "5";
    } else {
        input5 = $(this).val();
    };
    teethColoration($(this).val(), 5);
});

$("#input-six").on('keyup change', function () {
    if ($(this).val() == "4*") {
        input6 = "5";
    } else {
        input6 = $(this).val();
    };
    teethColoration($(this).val(), 6);
});


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

    var inputId = this.id;

    var teethId = "#" + inputId.slice(5);

    if ($(this).val() == "-") {
        $(teethId).removeClass().addClass("dmft-none");
        adulArray[inputId.slice(10)] = "-";
    };
    if ($(this).val() == "D") {
        $(teethId).removeClass().addClass("dmft-d");
        adulArray[inputId.slice(10)] = "D";
    };
    if ($(this).val() == "M") {
        $(teethId).removeClass().addClass("dmft-m");
        adulArray[inputId.slice(10)] = "M";
    };
    if ($(this).val() == "F") {
        $(teethId).removeClass().addClass("dmft-f");
        adulArray[inputId.slice(10)] = "F";
    };

    dmftCounter();
});


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

    var inputIdDecid = this.id;

    var teethIdDecid = "#" + inputIdDecid.slice(5);

    if ($(this).val() == "-") {
        $(teethIdDecid).removeClass().addClass("dmft-none");
        decidArray[inputIdDecid.slice(16)] = "-";
    };
    if ($(this).val() == "D") {
        $(teethIdDecid).removeClass().addClass("dmft-d");
        decidArray[inputIdDecid.slice(16)] = "D";
    };
    if ($(this).val() == "M") {
        $(teethIdDecid).removeClass().addClass("dmft-m");
        decidArray[inputIdDecid.slice(16)] = "M";
    };
    if ($(this).val() == "F") {
        $(teethIdDecid).removeClass().addClass("dmft-f");
        decidArray[inputIdDecid.slice(16)] = "F";
    };

    dmftCounterDecid();
});


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


    if ($('input:radio[id=male-sex-input]:checked').val() == "") {
        var sex = "male";
    } else if ($('input:radio[id=female-sex-input]:checked').val() == "") {
        var sex = "female";
    } else {
        var sex = "";
    };

    if ($('input:radio[id=diab-yes-input]:checked').val() == "") {
        var diab = "yes";
    } else if ($('input:radio[id=diab-no-input]:checked').val() == "") {
        var diab = "no";
    } else {
        var diab = "";
    };

    if ($('input:radio[id=smoke-yes-input]:checked').val() == "") {
        var smoke = "yes";
    } else if ($('input:radio[id=smoke-no-input]:checked').val() == "") {
        var smoke = "no";
    } else {
        var smoke = "";
    };

    if ($('input:radio[id=svapo-yes-input]:checked').val() == "") {
        var svapo = "yes";
    } else if ($('input:radio[id=svapo-no-input]:checked').val() == "") {
        var svapo = "no";
    } else {
        var svapo = "";
    };

    if ($('input:radio[id=brush-elet-input]:checked').val() == "") {
        var brush = "e";
    } else if ($('input:radio[id=brush-manu-input]:checked').val() == "") {
        var brush = "m";
    } else {
        var brush = "";
    };

    if ($('input:radio[id=paste-yes-input]:checked').val() == "") {
        var paste = "yes";
    } else if ($('input:radio[id=paste-no-input]:checked').val() == "") {
        var paste = "no";
    } else {
        var paste = "";
    };

    if ($('input:radio[id=wire-day]:checked').val() == "") {
        var wire = "day";
    } else if ($('input:radio[id=wire-week]:checked').val() == "") {
        var wire = "week";
    } else if ($('input:radio[id=wire-never]:checked').val() == "") {
        var wire = "never";
    } else {
        var wire = "";
    };

    if ($('input:radio[id=scovo-day]:checked').val() == "") {
        var scovo = "day";
    } else if ($('input:radio[id=scovo-week]:checked').val() == "") {
        var scovo = "week";
    } else if ($('input:radio[id=scovo-never]:checked').val() == "") {
        var scovo = "never";
    } else {
        var scovo = "";
    };

    if ($('input:radio[id=collu-day]:checked').val() == "") {
        var collu = "day";
    } else if ($('input:radio[id=collu-week]:checked').val() == "") {
        var collu = "week";
    } else if ($('input:radio[id=collu-never]:checked').val() == "") {
        var collu = "never";
    } else {
        var collu = "";
    };


    var path1 = report + end + ".html" + "?" + "oname=" + oname + "&pname=" + pname + "&bdate=" + bdate;
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











// **************************** DATA COLLECTION/INJECTION FROM PSR REPORT ****************************
// qui vanno inserite le querystring che vengono passate alla pagina 1 quando si torna indietro
// da un report, in modo che tutti gli input di pagina 1, 2 e 3 vengano precompilati. Altrimenti
// tornando indietro da un report, tutti i dati precedentemente inseriti vengono persi

const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

var prv = allData.get('prv');

if (prv == "yes") {
    $("#page1").hide();
    $("#page2PSR").show();
    var queryParams = new URLSearchParams(window.location.search);
    queryParams.set("prv", "no");
    history.replaceState(null, null, "?" + queryParams.toString());
};
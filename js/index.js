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

$("#page2PSR-prv-btn").click(function () {
    $("#page2PSR").hide();
    $("#page1").show();
});


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

$("#page2DMFT-prv-btn").click(function () {
    $("#page2DMFT").hide();
    $("#page1").show();
});


// *************** PAGE3 DMFT

$("#page3DMFT-prv-btn").click(function () {
    $("#page3DMFT").hide();
    $("#page2DMFT").show();
});

$("#page3DMFT-decid-prv-btn").click(function () {
    $("#page3DMFT-decid").hide();
    $("#page2DMFT").show();
});





// **************************** EXAM DATE TODAY PRECOMPILATION ****************************

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
$("#exam-date").attr("value", today);









// **************************** PAGE23 PRECOMPILATION ****************************

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
    var day = exdate.slice(8, 10);
    var month = exdate.slice(5, 7);
    var year = exdate.slice(0, 4);
    exdate = day + " / " + month + " / " + year;
    $("#exam-date-page23").val(exdate);
    $("#exam-date-page23-bis").val(exdate);
    $("#exam-date-page23-tris").val(exdate);
    $("#exam-date-page23-quad").val(exdate);
});






// **************************** AGE PRECOMPILATION ****************************

$("#birth-date").on('keyup change', function () {
    var birthDate = $("#birth-date").val();
    birthDate = birthDate.replace('-', '').replace('-', '');
    var ye = Number(birthDate.substr(0, 4));
    var mon = Number(birthDate.substr(4, 2)) - 1;
    var dy = Number(birthDate.substr(6, 2));
    var tod = new Date();
    var age = tod.getFullYear() - ye;
    if (tod.getMonth() < mon || (tod.getMonth() == mon && tod.getDate() < dy)) {
        age--;
    };

    if (ye > 1800) {
        $("#age").val(age);
        $("#age-page23").val(age);
    };
});






// **************************** DMFT SECOND PAGE TEETH ****************************

$("#dec-input, #adul-input").on("change", function () {
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
});







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

$("#adul .col-5 select").on("change", function () {

    var inputId = this.id;

    var teethId = "#" + inputId.slice(5);

    if ($(this).val() == "-") {
        $(teethId).removeClass().addClass("dmft-none");
    };
    if ($(this).val() == "D") {
        $(teethId).removeClass().addClass("dmft-d");
    };
    if ($(this).val() == "M") {
        $(teethId).removeClass().addClass("dmft-m");
    };
    if ($(this).val() == "F") {
        $(teethId).removeClass().addClass("dmft-f");
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

$("#decid .col-4 select").on("change", function () {

    var inputIdDecid = this.id;

    var teethIdDecid = "#" + inputIdDecid.slice(5);

    if ($(this).val() == "-") {
        $(teethIdDecid).removeClass().addClass("dmft-none");
    };
    if ($(this).val() == "D") {
        $(teethIdDecid).removeClass().addClass("dmft-d");
    };
    if ($(this).val() == "M") {
        $(teethIdDecid).removeClass().addClass("dmft-m");
    };
    if ($(this).val() == "F") {
        $(teethIdDecid).removeClass().addClass("dmft-f");
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








// **************************** DATA TRANSMISSION TO PAGE 3 ****************************

var oname = "Nome Cognome";
var pname = "Nome Cognome";
var input1 = "0";
var input2 = "0";
var input3 = "0";
var input4 = "0";
var input5 = "0";
var input6 = "0";


$("#page2PSR-nxt-btn").click(function () {

    oname = $("#oname-orig").val();

    pname = $("#pname-orig").val();

    var exdate = $("#exam-date").val();
    var day = exdate.slice(8, 10);
    var month = exdate.slice(5, 7);
    var year = exdate.slice(0, 4);
    exdate = day + " / " + month + " / " + year;

    if ($('input:radio[id=smoke-yes-input]:checked').val() == "") {
        var smoke = "yes";
    };

    if ($('input:radio[id=smoke-no-input]:checked').val() == "") {
        var smoke = "no";
    };

    var highest = Math.max(input1, input2, input3, input4, input5, input6);

    var path = "reports/psr" + highest + ".html" + "?" + "oname=" + oname + "&pname=" + pname + "&exdate=" + exdate + "&smoke=" + smoke + "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input4=" + input4 + "&input5=" + input5 + "&input6=" + input6;

    $("#dataPath").attr("href", path);
});
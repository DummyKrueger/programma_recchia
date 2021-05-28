// **************************** PROGRAM SELECTION RESPONSE ****************************

var toPage2 = "#page2PSR";

$("#program-selector").on("change", function () {
    if ($("#program-selector").val() == "DMFT") {
        toPage2 = "#page2DMFT";
        $("#page1-subtitle").html("<p>ANALISI</p><p>SITUAZIONE</p><p>DENTALE</p>");
        $("#page1-nxt-btn").css("top", "0");
        $("#page1-nxt-btn").css("left", "200px");
        $(".DMFT-radio-teeth").css("display", "block");
        $("#internal.vertical-line").css("height", "430px");
        $("#bodyPage1 .right-block").css("margin-top", "350px");
    }

    if ($("#program-selector").val() == "PSR") {
        toPage2 = "#page2PSR";
        $("#page1-subtitle").html("PERIODONTAL SCREENING AND RECORDING");
        $("#page1-nxt-btn").css("top", "50px");
        $("#page1-nxt-btn").css("left", "300px");
        $(".DMFT-radio-teeth").css("display", "none");
        $("#internal.vertical-line").css("height", "310px");
        $("#bodyPage1 .right-block").css("margin-top", "250px");
    }

});




// **************************** EXAM DATE TODAY PRECOMPILATION ****************************

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
$("#exam-date").attr("value", today);





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
        // $("#age").attr("value", age);
        $("#age").val(age);
    };
});




// **************************** DMFT FIRST PAGE TEETH ****************************

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






// **************************** PAGE BUTTONS FUNCTIONALITY ****************************

// ****************** hover style ******************
$("#page1-nxt-btn").hover(function () {
    $("#page1-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page1-nxt-btn img").removeClass("icon-hover");
});

$("#page2PSR-nxt-btn").hover(function () {
    $("#page2PSR-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page2PSR-nxt-btn img").removeClass("icon-hover");
});

$("#page2PSR-prv-btn").hover(function () {
    $("#page2PSR-prv-btn img").addClass("icon-hover");
}, function () {
    $("#page2PSR-prv-btn img").removeClass("icon-hover");
});

$("#page2DMFT-nxt-btn").hover(function () {
    $("#page2DMFT-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page2DMFT-nxt-btn img").removeClass("icon-hover");
});

$("#page2DMFT-prv-btn").hover(function () {
    $("#page2DMFT-prv-btn img").addClass("icon-hover");
}, function () {
    $("#page2DMFT-prv-btn img").removeClass("icon-hover");
});


// ****************** functionality ******************
// $("#page1").show();
// $("#page2PSR").hide();
// $("#page2DMFT").hide();

$("#page1").show();
$("#page2PSR").hide();
$("#page2DMFT").hide();

$("#page1-nxt-btn").click(function () {
    $("#page1").hide();
    $(toPage2).show();
});

$("#page1-nxt-btn").click(function () {
    $("#page1").hide();
    $(toPage2).show();
});

$("#page2PSR-prv-btn").click(function () {
    $("#page2PSR").hide();
    $("#page1").show();
});

$("#page2DMFT-prv-btn").click(function () {
    $("#page2DMFT").hide();
    $("#page1").show();
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






// **************************** DMFT TEETH COLORATION AND COUNTER ****************************

$(".col-5 select").on("change", function () {

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

    for (var i = 0; i < 16; i++) {

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

    for (var i = 16; i < 32; i++) {

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

    $(".total-counter-container #counter-none .counter-square").html(rightNones + leftNones);
    $(".total-counter-container #counter-d .counter-square").html(rightDs + leftDs);
    $(".total-counter-container #counter-m .counter-square").html(rightMs + leftMs);
    $(".total-counter-container #counter-f .counter-square").html(rightFs + leftFs);

    $(".dmft-final").html(rightDs + leftDs + rightMs + leftMs + rightFs + leftFs);
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

    var path = "psr" + highest + ".html" + "?" + "oname=" + oname + "&pname=" + pname + "&exdate=" + exdate + "&smoke=" + smoke + "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input4=" + input4 + "&input5=" + input5 + "&input6=" + input6;

    $("#dataPath").attr("href", path);
});
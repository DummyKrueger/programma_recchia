// **************************** PAGE BUTTONS FUNCTIONALITY ****************************

// ****************** hover style ******************
$("#page1-nxt-btn").hover(function () {
    $("#page1-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page1-nxt-btn img").removeClass("icon-hover");
});

$("#page2-nxt-btn").hover(function () {
    $("#page2-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page2-nxt-btn img").removeClass("icon-hover");
});

$("#page2-prv-btn").hover(function () {
    $("#page2-prv-btn img").addClass("icon-hover");
}, function () {
    $("#page2-prv-btn img").removeClass("icon-hover");
});

$("#roof-prv-btn").hover(function () {
    $("#roof-prv-btn img").addClass("icon-hover");
}, function () {
    $("#roof-prv-btn img").removeClass("icon-hover");
});



// ****************** functionality ******************
$("#page1").show();
$("#page2").hide();

$("#page1-nxt-btn").click(function () {
    $("#page1").hide();
    $("#page2").show();
});

$("#page2-prv-btn").click(function () {
    $("#page2").hide();
    $("#page1").show();
});






// **************************** PAGE 2 INPUTS CONTROL ****************************

$(".teeth-inputs").on('change keyup', function () {
    if ($(this).val() > 4) {
        $(this).val('4*');
    }
    if ($(this).val() < 0) {
        $(this).val('0');
    }
});






// **************************** TEETH GROUPS COLORATION ****************************

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




// **************************** DATA TRANSMISSION TO PAGE 3 ****************************

$("#page2-nxt-btn").click(function () {

    var highest = Math.max(input1, input2, input3, input4, input5, input6);

    var path = "result" + highest + ".html" + "?" + "&input1=" + input1 + "&input2=" + input2 + "&input3=" + input3 + "&input4=" + input4 + "&input5=" + input5 + "&input6=" + input6;

    $("#dataPath").attr("href", path);
});







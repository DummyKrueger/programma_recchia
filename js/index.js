// **************************** PAGE BUTTONS FUNCTIONALITY ****************************

$("#page1").show();
$("#page2").hide();
$("#page3").hide();



$("#page1-nxt-btn").click(function () {
    $("#page1").hide();
    $("#page2").show();
});

$("#page1-nxt-btn").hover(function () {
    $("#page1-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page1-nxt-btn img").removeClass("icon-hover");
});



$("#page2-nxt-btn").click(function () {
    $("#page2").hide();
    $("#page3").show();
});

$("#page2-nxt-btn").hover(function () {
    $("#page2-nxt-btn img").addClass("icon-hover");
}, function () {
    $("#page2-nxt-btn img").removeClass("icon-hover");
});



$("#page2-prv-btn").click(function () {
    $("#page2").hide();
    $("#page1").show();
});

$("#page2-prv-btn").hover(function () {
    $("#page2-prv-btn img").addClass("icon-hover");
}, function () {
    $("#page2-prv-btn img").removeClass("icon-hover");
});



$("#page3-prv-btn").click(function () {
    $("#page3").hide();
    $("#page2").show();
});

$("#page3-prv-btn").hover(function () {
    $("#page3-prv-btn img").addClass("icon-hover");
}, function () {
    $("#page3-prv-btn img").removeClass("icon-hover");
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

$("#input-one").on('keyup change', function () {
    if ($(this).val() == "0") {
        $('.group1 #target').removeClass().addClass("teeth-ext");
    }
    if ($(this).val() == "1") {
        $('.group1 #target').removeClass().addClass("state-one");
    }
    if ($(this).val() == "2") {
        $('.group1 #target').removeClass().addClass("state-two");
    }
    if ($(this).val() == "3") {
        $('.group1 #target').removeClass().addClass("state-three");
    }
    if ($(this).val() == "4") {
        $('.group1 #target').removeClass().addClass("state-four");
    }
    if ($(this).val() == "4*") {
        $('.group1 #target').removeClass().addClass("state-four");
    }
});



// .keydown(function (event) {
//     if (event.which == 4) {
//         alert('blank');
//     }
// })
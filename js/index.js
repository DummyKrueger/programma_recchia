// **************************** GESTIONE BOTTONI AVANTI/INDIETRO ****************************
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

$("#page2-prv-btn").click(function () {
    $("#page2").hide();
    $("#page1").show();
});

$("#page3-prv-btn").click(function () {
    $("#page3").hide();
    $("#page2").show();
});
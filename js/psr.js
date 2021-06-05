// **************************** DATA COLLECTION/INJECTION****************************
// questi sono i dati che vengono raccolti per essere usati all'interno di questo report

const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

var reportNum = allData.get('alpha');
var oname = allData.get('oname');
var pname = allData.get('pname');
var exdate = allData.get('exdate');
var smoke = allData.get('smoke');

$("#oname-dest").text(oname);
$("#pname-dest").text(pname);
$(".print-date-box").text(exdate);


if (smoke == "yes") {
    $(".smoke-box").css("display", "block");
} else if (reportNum == "5") {
    $(".smoke-box").css("display", "none");
    $("#smoke-no1").css("float", "left").css("margin-right", "5mm");
    $("#smoke-no2").css("display", "inline-block");
    $("#smoke-no3").css("margin-bottom", "20mm");
    $("#three3").css("left", "139mm").css("top", "147mm");
    $("#two2").css("top", "191mm");
    $(".output2").css("height", "340mm").css("bottom", "140mm");
    $(".delta-right-block").css("top", "115mm");
} else if (reportNum == "4") {
    $(".smoke-box").css("display", "none");
    $("#smoke-no1").css("float", "left").css("margin-right", "5mm");
    $("#smoke-no2").css("display", "inline-block");
    $("#smoke-no3").css("margin-bottom", "20mm");
    $("#three3").css("left", "139mm").css("top", "147mm");
    $("#two2").css("top", "191mm");
    $(".output2").css("height", "340mm");
    $(".delta-right-block").css("top", "90mm");
} else if (reportNum == "3") {
    $(".smoke-box").css("display", "none");
    $("#smoke-no1").css("float", "left").css("margin-right", "5mm");
    $("#smoke-no2").css("display", "inline-block");
    $("#smoke-no3").css("margin-bottom", "20mm");
    $("#three3").css("left", "139mm").css("top", "147mm");
    $("#two2").css("top", "191mm");
    $(".output2").css("height", "340mm");
    $(".delta-right-block").css("top", "105mm");
} else if (reportNum == "2") {
    $(".smoke-box").css("display", "none");
    $("#smoke-no1").css("float", "left").css("margin-right", "5mm");
    $("#smoke-no2").css("display", "inline-block");
    $("#smoke-no3").css("margin-bottom", "20mm");
    $("#three3").css("left", "139mm").css("top", "134mm");
    $("#two2").css("top", "178mm");
    $(".output2").css("height", "340mm");
    $(".delta-right-block").css("top", "70mm");
} else if (reportNum == "1") {
    $(".smoke-box").css("display", "none");
    $("#smoke-no1").css("float", "left").css("margin-right", "5mm");
    $("#smoke-no2").css("display", "inline-block");
    $("#smoke-no3").css("margin-bottom", "20mm");
    $("#three3").css("left", "139mm").css("top", "127.5mm");
    $("#two2").css("top", "171mm");
    $(".output2").css("height", "340mm");
    $(".delta-right-block").css("top", "70mm");
} else if (reportNum == "0") {
    $(".smoke-box").css("display", "none");
    $("#smoke-no1").css("float", "left").css("margin-right", "5mm");
    $("#smoke-no2").css("display", "inline-block");
    $("#smoke-no3").css("margin-bottom", "20mm");
    $("#three3").css("left", "139mm").css("top", "101mm");
    $("#two2").css("top", "145mm");
    $(".output2").css("height", "320mm");
    $(".delta-right-block").css("top", "35mm");
    $("#row5.print-row").css("margin-bottom", "0");
};







// **************************** TEETH COLORATION ****************************

for (var i = 1; i < 7; i++) {
    teethColoration(allData.get('input' + i), i)
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
    if (inputValue == "5") {
        $(selection).removeClass().addClass("state-four");
    }

};








// **************************** PRINT OUTPUT ****************************

$("#print-btn").click(function () {

    if (smoke != "yes" && reportNum == "3") {
        $(".ending").css("margin-top", "48mm");
        $("#one1").css("top", "219.5").css("left", "41");
        $("#two2").css("top", "264mm");
        $("#three3").css("left", "155mm").css("top", "219mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    } else if (smoke != "yes" && reportNum == "2") {
        $("#one1").css("top", "207.5mm");
        $("#two2").css("top", "252mm");
        $("#three3").css("left", "155mm").css("top", "207mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
        $(".ending").css("margin-top", "55mm");
    } else if (smoke != "yes" && reportNum == "1") {
        $("#one1").css("top", "200mm");
        $("#two2").css("top", "244.5mm");
        $("#three3").css("left", "155mm").css("top", "199.5mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
        $(".ending").css("margin-top", "65mm");
    } else if (smoke != "yes" && reportNum == "0") {
        $("#one1").css("top", "172mm");
        $("#two2").css("top", "216mm");
        $("#three3").css("left", "155mm").css("top", "172mm");
        $("#second-num.sheet-num").css("bottom", "-82mm");
        $(".ending").css("margin-top", "95mm");
    } else if (smoke != "yes") {
        $(".ending").css("margin-top", "38mm");
        $("#one1").css("top", "219.5").css("left", "41");
        $("#two2").css("top", "264mm");
        $("#three3").css("left", "155mm").css("top", "219mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    };

    window.print();

    location.reload();

});

$("#print-btn2").click(function () {

    if (smoke != "yes" && reportNum == "3") {
        $(".ending").css("margin-top", "48mm");
        $("#one1").css("top", "219.5").css("left", "41");
        $("#two2").css("top", "264mm");
        $("#three3").css("left", "155mm").css("top", "219mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    } else if (smoke != "yes" && reportNum == "2") {
        $("#one1").css("top", "207.5mm");
        $("#two2").css("top", "252mm");
        $("#three3").css("left", "155mm").css("top", "207mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
        $(".ending").css("margin-top", "55mm");
    } else if (smoke != "yes" && reportNum == "1") {
        $("#one1").css("top", "200mm");
        $("#two2").css("top", "244.5mm");
        $("#three3").css("left", "155mm").css("top", "199.5mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
        $(".ending").css("margin-top", "65mm");
    } else if (smoke != "yes" && reportNum == "0") {
        $("#one1").css("top", "172mm");
        $("#two2").css("top", "216mm");
        $("#three3").css("left", "155mm").css("top", "172mm");
        $("#second-num.sheet-num").css("bottom", "-82mm");
        $(".ending").css("margin-top", "95mm");
    } else if (smoke != "yes") {
        $(".ending").css("margin-top", "38mm");
        $("#one1").css("top", "219.5").css("left", "41");
        $("#two2").css("top", "264mm");
        $("#three3").css("left", "155mm").css("top", "219mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    };

    window.print();

    location.reload();

});







// **************************** OTHER DATA COLLECTION****************************
// qui viene inserita la querystring nel path dei bottoni per tornare indietro in modo che
// i valori della querystring vengano rimandati all'index


$("#dataPath-analysis5").attr("href", "../index.html" + queryString + "&prv=no");
$("#dataPath-analysis5-2").attr("href", "../index.html" + queryString + "&prv=no");
$("#dataPath-psr5-prv").attr("href", "../index.html" + queryString + "&prv=yes");
$("#dataPath-psr5-prv2").attr("href", "../index.html" + queryString + "&prv=yes");
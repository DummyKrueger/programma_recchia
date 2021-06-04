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

    if (smoke != "yes" && reportNum == "2") {
        $("#one1").css("top", "205.5mm");
        $("#two2").css("top", "250mm");
        $("#three3").css("left", "155mm").css("top", "205mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    } else if (smoke != "yes") {
        $("#two2").css("top", "262mm");
        $("#three3").css("left", "155mm").css("top", "217mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    };

    window.print();

});

$("#print-btn2").click(function () {

    if (smoke != "yes" && reportNum == "2") {
        $("#one1").css("top", "205.5mm");
        $("#two2").css("top", "250mm");
        $("#three3").css("left", "155mm").css("top", "205mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    } else if (smoke != "yes") {
        $("#two2").css("top", "262mm");
        $("#three3").css("left", "155mm").css("top", "217mm");
        $("#second-num.sheet-num").css("bottom", "-62mm");
    };

    window.print();

});







// **************************** OTHER DATA COLLECTION****************************
// questi sono i dati che vengono raccolti per essere rispediti ad index.html

var dataArray1 = ["oname=" + allData.get('oname'), "&pname=" + allData.get('pname'), "&bdate=" + allData.get('bdate'), "&ageX=" + allData.get('ageX'), "&sex=" + allData.get('sex'), "&diab=" + allData.get('diab')];
var dataArray2 = ["&exSmoke=" + allData.get('exSmoke'), "&svapo=" + allData.get('svapo'), "&freq=" + allData.get('freq'), "&brush=" + allData.get('brush'), "&paste=" + allData.get('paste'), "&wire=" + allData.get('wire')];
var dataArray3 = ["&scovo=" + allData.get('scovo'), "&collu=" + allData.get('collu'), "&collutype=" + allData.get('collutype'), "&exdate=" + allData.get('exdate'), "&smoke=" + allData.get('smoke'), "&input1=" + allData.get('input1')];
var dataArray4 = ["&input2=" + allData.get('input2'), "&input3=" + allData.get('input3'), "&input4=" + allData.get('input4'), "&input5=" + allData.get('input5'), "&input6=" + allData.get('input6'), "&adul1=" + allData.get('adul1')];
var dataArray5 = ["&adul2=" + allData.get('adul2'), "&adul3=" + allData.get('adul3'), "&adul4=" + allData.get('adul4'), "&adul5=" + allData.get('adul5'), "&adul6=" + allData.get('adul6'), "&adul7=" + allData.get('adul7'), "&adul8=" + allData.get('adul8')];
var dataArray6 = ["&adul9=" + allData.get('adul9'), "&adul10=" + allData.get('adul10'), "&adul11=" + allData.get('adul11'), "&adul12=" + allData.get('adul12'), "&adul13=" + allData.get('adul13'), "&adul14=" + allData.get('adul14'), "&adul15=" + allData.get('adul15')];
var dataArray7 = ["&adul16=" + allData.get('adul16'), "&adul17=" + allData.get('adul17'), "&adul18=" + allData.get('adul18'), "&adul19=" + allData.get('adul19'), "&adul20=" + allData.get('adul20'), "&adul21=" + allData.get('adul21'), "&adul22=" + allData.get('adul22')];
var dataArray8 = ["&adul23=" + allData.get('adul23'), "&adul24=" + allData.get('adul24'), "&adul25=" + allData.get('adul25'), "&adul26=" + allData.get('adul26'), "&adul27=" + allData.get('adul27'), "&adul28=" + allData.get('adul28'), "&decid1=" + allData.get('decid1')];
var dataArray9 = ["&decid2=" + allData.get('decid2'), "&decid3=" + allData.get('decid3'), "&decid4=" + allData.get('decid4'), "&decid5=" + allData.get('decid5'), "&decid6=" + allData.get('decid6'), "&decid7=" + allData.get('decid7'), "&decid8=" + allData.get('decid8')];
var dataArray10 = ["&decid9=" + allData.get('decid9'), "&decid10=" + allData.get('decid10'), "&decid11=" + allData.get('decid11'), "&decid12=" + allData.get('decid12'), "&decid13=" + allData.get('decid13'), "&decid14=" + allData.get('decid14'), "&decid15=" + allData.get('decid15')];
var dataArray11 = ["&decid16=" + allData.get('decid16'), "&decid17=" + allData.get('decid17'), "&decid18=" + allData.get('decid18'), "&decid19=" + allData.get('decid19'), "&decid20=" + allData.get('decid20')];

var dataArray = dataArray1.concat(dataArray2).concat(dataArray3).concat(dataArray4).concat(dataArray5).concat(dataArray6).concat(dataArray7).concat(dataArray8).concat(dataArray9).concat(dataArray10).concat(dataArray11);

var dataArrayString = "&" + dataArray;

dataArrayString = dataArrayString.replaceAll(",", "");

$("#dataPath-analysis5").attr("href", "../index.html?prv=no" + dataArrayString);
$("#dataPath-analysis5-2").attr("href", "../index.html?prv=no" + dataArrayString);
$("#dataPath-psr5-prv").attr("href", "../index.html?prv=yes" + dataArrayString);
$("#dataPath-psr5-prv2").attr("href", "../index.html?prv=yes" + dataArrayString);
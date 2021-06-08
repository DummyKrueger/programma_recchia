const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

$("#pname-page4").val(allData.get('pname'))
$("#exam-date-page4").val(allData.get("exdate"));

var dmf = allData.get("adulf");

var age = allData.get("ageX");
if (age > 80) {
    var plotAge = 80;
} else if (age == "") {
    age = 0;
    var plotAge = age;
} else {
    var plotAge = age;
};

$("#age-dmf-square").html(age);
$("#index-dmf-square").html(dmf);






// ***************************************** PLOT **************************************
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');

// ************************ COORDINATES
var const1 = 41;
var const2 = 261;


var xVal = const1 + plotAge * 4.00625;
var yVal = const2 - dmf * 8.71429;


// ************************ LINE 1
context.beginPath();
context.setLineDash([8, 10]);
context.lineWidth = 4
context.strokeStyle = "#555";
context.moveTo(const1, yVal);
context.lineTo(xVal, yVal);
context.stroke();

// ************************ LINE 2
context.beginPath();
context.strokeStyle = "#006459";;
context.moveTo(xVal, const2);
context.lineTo(xVal, yVal);
context.stroke();

// ************************ TRIANGLE 1
context.beginPath();
context.moveTo(5, yVal - 10);
context.lineTo(5, yVal + 10);
context.lineTo(15, yVal);
context.fillStyle = "#555";
context.fill();

// ************************ TRIANGLE 2
context.beginPath();
context.moveTo(xVal - 10, 291);
context.lineTo(xVal + 10, 291);
context.lineTo(xVal, 281);
context.fillStyle = "#555";
context.fill();

// ************************ DOTS
context.beginPath();
context.arc(xVal, yVal, 8, 0, Math.PI * 2, true);
context.fillStyle = "#fff";
context.fill();

context.beginPath();
context.arc(xVal, yVal, 4, 0, Math.PI * 2, true);
context.fillStyle = "#555";
context.fill();








// ***************************************** RISK CLASS **************************************

var risk = "green";

if (dmf == 0) {
    risk = "green";
} else if (dmf == 1 && age > 7 && age < 14) {
    risk = "yellow";
} else if (dmf == 1 && age >= 14) {
    risk = "green";
} else if (dmf == 2 && age > 12 && age < 17) {
    risk = "yellow";
} else if (dmf == 2 && age >= 17) {
    risk = "green";
} else if (dmf == 3 && age > 14 && age < 21) {
    risk = "yellow";
} else if (dmf == 3 && age >= 21) {
    risk = "green";
} else if (dmf == 4 && age > 16 && age < 25) {
    risk = "yellow";
} else if (dmf == 4 && age >= 25) {
    risk = "green";
} else if (dmf == 5 && age > 17 && age < 29) {
    risk = "yellow";
} else if (dmf == 5 && age >= 29) {
    risk = "green";
} else if (dmf == 6 && age > 20 && age < 32) {
    risk = "yellow";
} else if (dmf == 6 && age >= 32) {
    risk = "green";
} else if (dmf == 7 && age > 22 && age < 36) {
    risk = "yellow";
} else if (dmf == 7 && age >= 36) {
    risk = "green";
} else if (dmf == 8 && age > 25 && age < 39) {
    risk = "yellow";
} else if (dmf == 8 && age >= 39) {
    risk = "green";
} else if (dmf == 9 && age > 28 && age < 42) {
    risk = "yellow";
} else if (dmf == 9 && age >= 42) {
    risk = "green";
} else if (dmf == 10 && age > 31 && age < 46) {
    risk = "yellow";
} else if (dmf == 10 && age >= 46) {
    risk = "green";
} else if (dmf == 11 && age > 34 && age < 49) {
    risk = "yellow";
} else if (dmf == 11 && age >= 49) {
    risk = "green";
} else if (dmf == 12 && age > 37 && age < 52) {
    risk = "yellow";
} else if (dmf == 12 && age >= 52) {
    risk = "green";
} else if (dmf == 13 && age > 40 && age < 55) {
    risk = "yellow";
} else if (dmf == 13 && age >= 55) {
    risk = "green";
} else if (dmf == 14 && age > 44 && age < 59) {
    risk = "yellow";
} else if (dmf == 14 && age >= 59) {
    risk = "green";
} else if (dmf == 15 && age > 47 && age < 64) {
    risk = "yellow";
} else if (dmf == 15 && age >= 64) {
    risk = "green";
} else if (dmf == 16 && age > 50 && age < 74) {
    risk = "yellow";
} else if (dmf == 16 && age >= 74) {
    risk = "green";
} else if (dmf == 17 && age > 54) {
    risk = "yellow";
} else if (dmf == 18 && age > 58) {
    risk = "yellow";
} else {
    risk = "red";
};


if (risk == "green") {
    $("#risk-green").css("display", "block");
    $("#risk-yellow").css("display", "none");
    $("#risk-red").css("display", "none");
} else if (risk == "yellow") {
    $("#risk-green").css("display", "none");
    $("#risk-yellow").css("display", "block");
    $("#risk-red").css("display", "none");
} else if (risk == "red") {
    $("#risk-green").css("display", "none");
    $("#risk-yellow").css("display", "none");
    $("#risk-red").css("display", "block");
};










// **************************** PERSONAL INDICATIONS ****************************

var advice1 = "Mastica Gomme allo Xilitolo ed usa Eritritolo come zucchero";
var advice1text = "Prova a sostituire il classico saccarosio (lo zucchero a cui siamo sempre abituati) con l'Eritritolo (chiedi qualche bustina in reception per provare) e mastica una gomma allo Xilitolo per 4 minuti dopo pranzo se non riesci a lavarti i denti.  Entrambi questi zuccheri non promuovono la carie."
var advice2 = "Controlla i dolci e la dieta (massimo 5% di zuccheri)";
var advice2text = "Quanto zucchero ingerisci durante la giornata contribuisce assieme alla frequenza (Snacking) all'insorgenza di nuove carie nella tua bocca. Ricorda che gli zuccheri non devono essere più del 5% del fabbisogno in calorie giornaliero; affidati ad una Dietista se ne hai bisogno.";
var advice3 = "Controlla la frequenza dei pasti (snacking)";
var advice3text = "Quanto zucchero mangi è cruciale per l'insorgenza delle carie, ma anche quanto spesso mangi dolci e zuccheri. Limita la loro assunzione ai soli pasti principali. Per approfondire leggi questo post www.recchiadentistibambini.it/nutrizionista/";


$("#pers-input1").on("change", function () {
    persIndication("2", $(this).val());
    $("#pers-input1").val("0");
});

$("#pers-input2").on("change", function () {
    persIndication("1", $(this).val());
    $("#pers-input2").val("0");
});

$("#pers-input3").on("change", function () {
    persIndication("3", $(this).val());
    $("#pers-input3").val("0");
});

$("#pers-input4").on("change", function () {
    persIndication("4", $(this).val());
    $("#pers-input4").val("0");
});



function persIndication(num, choice) {

    var pers = "#pers" + num;
    var persText = "#pers" + num + "text";

    if (choice == "1") {
        $(pers).css("padding-top", "0")
        $(pers).text(advice1);
        $(persText).text(advice1text);
    } else if (choice == "2") {
        $(pers).css("padding-top", "0")
        $(pers).text(advice2);
        $(persText).text(advice2text);
    } else if (choice == "3") {
        $(pers).css("padding-top", "4mm")
        $(pers).text(advice3);
        $(persText).text(advice3text);
    };
};









// **************************** DATA TRANSMISSION TO INDEX ****************************
$("#dataPath-analysis6").attr("href", "../index.html" + queryString + "&prv=no");
$("#dataPath-dmft6-prv").attr("href", "../index.html" + queryString + "&prv=adul");
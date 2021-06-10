const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

var oname = allData.get('oname');
var pname = allData.get('pname');
var exdate = allData.get('exdate');

$("#oname-dest").text(oname);
$("#pname-dest").text(pname);
$(".print-date-box").text(exdate);

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


for (var i = 1; i < 29; i++) {
    $("#lbox" + i + " .joke").html(allData.get("adul" + i));
    dmftColoration("dmft-teeth" + i, allData.get("adul" + i));
};

function dmftColoration(inputId, value) {

    var teethId = "#" + inputId.slice(5);

    if (value == "-") {
        $(teethId).removeClass().addClass("dmft-none");
    };
    if (value == "D") {
        $(teethId).removeClass().addClass("dmft-d");
    };
    if (value == "M") {
        $(teethId).removeClass().addClass("dmft-m");
    };
    if (value == "F") {
        $(teethId).removeClass().addClass("dmft-f");
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

        var dmftValue = $("#lbox" + (i + 1) + " .joke").html();

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

        var dmftValue = $("#lbox" + (i + 1) + " .joke").html();

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

    $("#dmf-sum").html(rightDs + leftDs + rightMs + leftMs + rightFs + leftFs);
};











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









// questo pezzo di codice fa si che appena viene aperta la pagina, si apre la finestra di stampa e, una
// volta chiusa la finestra di stampa, torna alla pagina precedente passandogli la querystring

// window.print();

// window.onafterprint = function () {
//     window.location.href = "dmft-adul.html" + queryString;
// }
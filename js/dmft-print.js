const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

var oname = allData.get('oname');
var pname = allData.get('pname');
var exdate = allData.get('exdate');

$("#oname-dest").text(oname);
$("#pname-dest").text(pname);
$(".print-date-box").text(exdate);




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










// questo pezzo di codice fa si che appena viene aperta la pagina, si apre la finestra di stampa e, una
// volta chiusa la finestra di stampa, torna alla pagina precedente passandogli la querystring

// window.print();

// window.onafterprint = function () {
//     window.location.href = "dmft-adul.html" + queryString;
// }
const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

var oname = allData.get('oname');
var pname = allData.get('pname');
var exdate = allData.get('exdate');

$("#oname-dest").text(oname);
$("#pname-dest").text(pname);
$(".print-date-box").text(exdate);












// questo pezzo di codice fa si che appena viene aperta la pagina, si apre la finestra di stampa e, una
// volta chiusa la finestra di stampa, torna alla pagina precedente passandogli la querystring

// window.print();

// window.onafterprint = function () {
//     window.location.href = "dmft-adul.html" + queryString;
// }
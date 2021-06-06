const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

$("#pname-page4").val(allData.get('pname'))
$("#exam-date-page4").val(allData.get("exdate"));

var dmf = allData.get("adulf");

var age = allData.get("ageX");
if (age > 80) {
    var plotAge = 80;
} else if (age == "") {
    var plotAge = 0;
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









// **************************** DATA TRANSMISSION TO INDEX ****************************
$("#dataPath-analysis6").attr("href", "../index.html" + queryString + "&prv=no");
$("#dataPath-dmft6-prv").attr("href", "../index.html" + queryString + "&prv=adul");
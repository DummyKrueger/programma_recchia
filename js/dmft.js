const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

$("#pname-page4").val(allData.get('pname'))
$("#exam-date-page4").val(allData.get("exdate"));


$("#dataPath-analysis6").attr("href", "../index.html" + queryString + "&prv=no");
$("#dataPath-dmft6-prv").attr("href", "../index.html" + queryString + "&prv=adul");




// ***************************************** PLOT **************************************
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');

// ************************ COORDINATES
var const1 = 41;
var const2 = 260;

var age = 20;
var dmf = 21;

var xVal = 54 + age * 4.975;
var yVal = 327 - dmf * 10.857;


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
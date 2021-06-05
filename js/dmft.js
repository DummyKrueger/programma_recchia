const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

$("#pname-page4").val(allData.get('pname'))
$("#exam-date-page4").val(allData.get("exdate"));






$("#dataPath-analysis6").attr("href", "../index.html" + queryString + "&prv=no");
$("#dataPath-dmft6-prv").attr("href", "../index.html" + queryString + "&prv=adul");
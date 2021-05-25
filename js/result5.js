const queryString = window.location.search;

const allData = new URLSearchParams(queryString);

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

    window.print();

});
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
var advice2 = "Sigilla i denti permanenti";
var advice2text = "Proteggi i denti con le sigillature, prima lo fai e meno rischi di carie avrai.";
var advice3 = "Collutori? Ecco quelli giusti";
var advice3text = 'Se hai una infezione tipo "gengivite", usa collutori alla Clorexidina per 1-2 settimane. Dopo questa fase, alterna ogni giorno un collutorio con Fluoro ed uno con la Clorexidina sempre dopo aver lavato i denti.';
var advice4 = "Ti sei lavato i denti bene? Ecco come fare a saperlo";
var advice4text = "Utilizza un colorante per la placca, nella prima fase usalo prima di lavarti i denti. Dopo 2 settimane, usalo dopo aver spazzolato bene i denti per vedere dove devi migliorare!";
var advice5 = "Hai l'apparecchio? per te una attenzione diversa";
var advice5text = 'Compra un "idropulsore" per pulire tra i gli spazi  e alla fine della tua seduta di Igiene Orale chiedi che usino "Vernici e gel al Fluoro " attorno ai bracket e bande, sono punti fragile dove la carie potrebbe arrivare facilmente.';
var advice6 = "Utilizza dentifrici Fluorati e bevi l'acqua giusta";
var advice6text = "Già dai primi mesi di vita usa dentifrici con fluoro. Se il pediatra di tuo figlio crede sia necessario, in gravidanza o nei primi anni di vita bevi acqua ad alto contenuto di fluoro. per informazioni porta questa scheda dal medico https://www.ambulatoriorecchia.it/fluoro/";
var advice7 = "Sei in dolce attesa? Ecco le raccomandazioni per te";
var advice7text = "Bevi sempre abbondantemente durante l’intero arco della giornata e fai piccoli pasti limitando ai soli pasti principali l'assunzione di cibi contenenti zuccheri. In caso di vomito, risciac-quare la bocca con acqua e bicarbonato (basta un cucchiaino) per neutralizzare l’acidità dell’ambiente orale. Dopo";
var advice7bis = "mangiato, mastica gomme senza zucchero o con xilitolo. Usa spazzolini da denti delicati e dentifrici al fluoro: in questo modo si evitano danni ai denti";
var advice7bistext = "resi più delicati dalla demineralizzazione. Evita bevande gassate e zuccherate, preferendo l’acqua; Preferisci la frutta ai succhi e spremute. Tutta la famiglia deve arrivare alla nascita con una bocca batteriologicamente sana: mamma, papà, fratelli e nonni, questo previene la contaminazione della bocca del tuo piccolo da parte di batteri cariogeni proteggendolo dalla carie.";
var advice8 = "Piercing, diabete e sigarette";
var advice8text = "Piercing e fumo non fanno di certo bene ai tuoi denti, cerca di smettere di fumare e togli se puoi i piercing orali. Se non lo fai di frequente controlla la glicemia e diabete, parla di questo con il tuo medico di base. Sono tutti fattori che hanno una grossa influenza sulla tua salute, denti compresi.";
var advice9 = "Hai la bocca secca?";
var advice9text = "Cerca di avere molta salvia, se ne hai poca prova a bere molta acqua durante il giorno. Alcuni farmaci interferiscono con la secrezione di saliva. In casi selezionanti ti raccomandiamo test salivari (Ph, volume, coltura batterica). Il fumo è un fattore che influisce negativamente sulla capacità tampone della saliva e il suo volume.";
var advice10 = "Controlla i dolci e la dieta (massimo 5% di zuccheri)";
var advice10text = "Quanto zucchero ingerisci durante la giornata contribuisce assieme alla frequenza (Snacking) all'insorgenza di nuove carie nella tua bocca. Ricorda che gli zuccheri non devono essere più del 5% del fabbisogno in calorie giornaliero; affidati ad una Dietista se ne hai bisogno.";
var advice11 = "Controlla la frequenza dei pasti (snacking)";
var advice11text = "Quanto zucchero mangi è cruciale per l'insorgenza delle carie, ma anche quanto spesso mangi dolci e zuccheri. Limita la loro assunzione ai soli pasti principali. Per approfondire leggi questo post www.recchiadentistibambini.it/nutrizionista/";
var advice12 = "I probiotici e la carie";
var advice12text = "Se hai molte carie, oltre a migliorare dieta ed igiene orale a casa, utilizza CARIOBLIS (un probiotico al pari dei fermenti lattici) che ha la capacità in 3 mesi di sostituire i batteri patogeni con una flora meno aggressiva. Ovviamente i denti vanno sempre lavati secondo linee guida.";
var advice13 = "Bevi acqua o bevande senza zucchero";
var advice13text = "Impara a bere solo acqua e non bere succhi di frutta o bevande acide e gassate. Preferisci tisane a freddo (della pompadour ) e mangia frutta invece che spremute, la fibra nella frutta tampona acidi e fruttosio in essa contenuta.";
var advice14 = "Sei uno sportivo?";
var advice14text = "Fai attenzione agli energy drink che forse bevi durante i tuoi allenamenti, sono molto acidi e zuccherini";





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
        reverse();
        $(persText).css("margin-top", "-3mm");
        $(pers).text(advice1);
        $(persText).text(advice1text);
    } else if (choice == "2") {
        reverse();
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice2);
        $(persText).text(advice2text);
    } else if (choice == "3") {
        reverse();
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice3);
        $(persText).text(advice3text);
    } else if (choice == "4") {
        reverse();
        $(persText).css("margin-top", "-3mm");
        $(pers).text(advice4);
        $(persText).text(advice4text);
    } else if (choice == "5") {
        reverse();
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice5);
        $(persText).text(advice5text);
    } else if (choice == "6") {
        reverse();
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice6);
        $(persText).text(advice6text);
    } else if (choice == "7") {
        $(persText).css("margin-top", "-3mm");
        $(pers).text(advice7);
        $(persText).text(advice7text);
        $(".pers-box1").css("height", "101mm");
        $("#pers2").css("font-family", "OpenSans-Regular").css("margin-top", "-4.5mm").css("height", "14.5mm");
        $("#pers2").text(advice7bis);
        $("#pers2text").css("height", "42mm").css("margin-top", "-3mm");
        $("#pers2text").text(advice7bistext);
    } else if (choice == "8") {
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice8);
        $(persText).text(advice8text);
    } else if (choice == "9") {
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice9);
        $(persText).text(advice9text);
    } else if (choice == "10") {
        $(persText).css("margin-top", "-3mm");
        $(pers).text(advice10);
        $(persText).text(advice10text);
    } else if (choice == "11") {
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice11);
        $(persText).text(advice11text);
    } else if (choice == "12") {
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice12);
        $(persText).text(advice12text);
    } else if (choice == "13") {
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice13);
        $(persText).text(advice13text);
    } else if (choice == "14") {
        $(persText).css("margin-top", "-6.8mm");
        $(pers).text(advice14);
        $(persText).text(advice14text);
    };
};





function reverse() {
    if ($("#pers2").css("font-family") == "OpenSans-Regular") {
        $("#pers2").text("");
        $("#pers2text").text("");
    };

    $(".pers-box1").css("height", "89mm");
    $("#pers2").css("font-family", "OpenSans-SemiBold").css("margin-top", "-3mm").css("height", "10mm");
    $("#pers2text").css("height", "30mm");
};








// **************************** DATA TRANSMISSION TO PRINT ****************************

$("#dataPath-to-print1").attr("href", "dmft-adul-print.html" + queryString);
$("#dataPath-to-print2").attr("href", "dmft-adul-print.html" + queryString);






// **************************** DATA TRANSMISSION TO INDEX ****************************
$("#dataPath-analysis6").attr("href", "../index.html" + queryString + "&prv=no");
$("#dataPath-dmft6-prv").attr("href", "../index.html" + queryString + "&prv=adul");
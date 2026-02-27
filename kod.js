function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function arakSzamitas(){
        let ar1 = document.getElementById("termekAra1").innerText;
        let db1 = document.getElementById("mennyiseg1").value;
        let egyseg1 = ar1*db1;
        document.getElementById("egysegAr1").innerText = egyseg1 +"Ft";

        let ar2 = document.getElementById("termekAra2").innerText;
        let db2 = document.getElementById("mennyiseg2").value;
        let egyseg2 = ar2*db2;
        document.getElementById("egysegAr2").innerText = egyseg2 +"Ft";

        let ar3 = document.getElementById("termekAra3").innerText;
        let db3 = document.getElementById("mennyiseg3").value;
        let egyseg3 = ar3*db3;
        document.getElementById("egysegAr3").innerText = egyseg3 +"Ft";

        let ar4 = document.getElementById("termekAra4").innerText;
        let db4 = document.getElementById("mennyiseg4").value;
        let egyseg4 = ar4*db4;
        document.getElementById("egysegAr4").innerText = egyseg4 +"Ft";

        let ar5 = document.getElementById("termekAra5").innerText;
        let db5 = document.getElementById("mennyiseg5").value;
        let egyseg5 = ar5*db5;
        document.getElementById("egysegAr5").innerText = egyseg5 +"Ft";

        document.getElementById("kosarLista").innerHTML = egyseg1 + egyseg2 
        + egyseg3 + egyseg4 + egyseg5 +"Ft"

    }



// function kivalaszt(melyikTermek) {
//     let darab = prompt("Hány darabot szeretne?");

//     if (darab != 0 && darab != "") {
//         let kosar = document.getElementById("kosarLista");
//         let ujTermek = document.createElement("li");
//         kosar.innerHTML += melyikTermek+"  "+darab+"db<br>";
//         lista.appendChild(ujTermek);
//     }
// }
function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function kivalaszt(melyikTermek) {
    let darab = prompt("Hány darabot szeretne?");

    if (darab != 0 && darab != "") {
        let kosar = document.getElementById("kosarLista");
        let ujTermek = document.createElement("li");
        kosar.innerHTML += melyikTermek+"  "+darab+"db<br>";
        lista.appendChild(ujTermek);
    }
}
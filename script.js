window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem); // rövidítő függvény, elég a document.getElementById helyett, hogy ID
}
function $(elem){
    return document.querySelectorAll(elem);
}
var tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
var lepes = 0;

function init(){
    var txt="";
    for (let i = 0; i < 9; i++) {
        txt+="<div id='"+i+"'><p>"+"</p></div>";
    }
    ID("tablazat").innerHTML=txt;
    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click", kattintas)
    }
}

function kattintas(){
    var aktIndex = (event.target.id) // megmutatja melyikre kattintottunk rá
    console.log(aktIndex);
    if(lepes % 2 == 0){
        ID(aktIndex).innerHTML ="O";
        ID(aktIndex).style.backgroundColor = "red";
        tomb[aktIndex] = "O";
        $("#infopanel p span")[0].innerHTML = ID("nev1").value;
    } else{
        ID(aktIndex).innerHTML ="X";
        ID(aktIndex).style.backgroundColor = "green";
        tomb[aktIndex] = "X";
        $("#infopanel p span")[0].innerHTML = ID("nev2").value;
    }
    lepes++;
    console.log(tomb);
    ID(aktIndex).className = "formazas";
    ID(aktIndex).removeEventListener("click", kattintas)
}
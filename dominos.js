/*var add = 0;

function rotate() {
    document.getElementById("dominoe5-0").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
window.onload = function () {
    var el = document.getElementById("dominoe5-0");
    if (el) {
        el.addEventListener("click", rotate, true);
    }
}*/
var add = 0;

function rotate() {
    document.getElementById("dominoe0-0").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("dominoe0-0");
el.addEventListener("click", rotate);

var t = new Array(1, 2, 3, 4, 5);
t.shuffle();     // on mélange le tableau

console.log(t);


/*function melange
function distribution
function placement
function pioche
function victorieux*/

window.addEventListener('load', start);
var inputRed = null;
var inputGreen = null;
var inputBlue = null;
var paleta = null;
var rgb = '';

function start() {
    mapearInputs();
    coletaRange();
    paletaRGB();
}

function mapearInputs() {
    rangeRed = document.querySelector('#red');
    rangeGreen = document.querySelector('#green');
    rangeBlue = document.querySelector('#blue');
    inputRed = document.querySelector('#redNum');
    inputGreen = document.querySelector('#greenNum');
    inputBlue = document.querySelector('#blueNum');
}

function coletaRange() {
    rangeRed.addEventListener("input", inputChangeR);
    rangeGreen.addEventListener("input", inputChangeG);
    rangeBlue.addEventListener("input", inputChangeB);
}

function inputChangeR(event) {
    inputRed.value = event.target.value;
    paletaRGB();
}

function inputChangeG(event) {
    inputGreen.value = event.target.value;
    paletaRGB();
}

function inputChangeB(event) {
    inputBlue.value = event.target.value;
    paletaRGB();
}

function paletaRGB() {
    rgb = ("rgb(" + inputRed.value + "," + inputGreen.value + "," + inputBlue.value + ")")
    console.log(rgb);
    paleta = document.querySelector('.paleta');
    paleta.style.backgroundColor = rgb;

}
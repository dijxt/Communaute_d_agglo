addEventListener("load", init);

function init() {
    document.getElementById("a1").addEventListener("click", a1);
    document.getElementById("a2").addEventListener("click", a2);
    document.getElementById("a3").addEventListener("click", a3);
}

function a1() {
    location.href = 'pages/decouvrir_region.html';
}

function a2() {
    location.href = 'pages/economie.html';
}

function a3() {
    location.href = 'pages/lesActus.html';
}

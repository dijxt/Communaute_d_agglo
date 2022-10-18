$(document).ready(init);
var a;

function init() {
    a = $(".show");
    a.on("click", montrer);
    $(".cacher").hide();
}

function montrer() {
    a = $(this);
    a.off("click", montrer);
    a.on("click", cacher);
    a.text("Lire moins");
    a.parent().prev().show("fast");
}

function cacher() {
    a = $(this);
    a.off("click", cacher);
    a.on("click", montrer);
    a.text("Lire plus");
    a.parent().prev().hide("fast");
}

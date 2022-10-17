$(document).ready(init);
var a;
function init(){
    a = $("#show");
    a.on("click", montrer);
    $("#cacher").hide();
}

function montrer(){
    a.off("click", montrer);
    a.on("click", cacher);
    a.text("Lire moins");
    $("#cacher").show("fast");
}

function cacher(){
    a.off("click", cacher);
    a.on("click", montrer);
    a.text("Lire plus");
    $("#cacher").hide("fast");
}

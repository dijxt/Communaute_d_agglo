//faire en sorte que lorsque que
//i .lireArticle est survolé, l'image des chevrons change (chevrons noirs → chevrons blancs autre image gimp)

$(init);

function init() {
    $(".lireLarticle1").mouseover(chevronBlanc1);
    $(".lireLarticle1").mouseout(chevronNoir1);

    $(".lireLarticle2").mouseover(chevronBlanc2);
    $(".lireLarticle2").mouseout(chevronNoir2);

    $(".lireLarticle3").mouseover(chevronBlanc3);
    $(".lireLarticle3").mouseout(chevronNoir3);

    $(".lireLarticle4").mouseover(chevronBlanc4);
    $(".lireLarticle4").mouseout(chevronNoir4);
}

function chevronBlanc1() {
    $(".chevron1").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronNoir1() {
    $(".chevron1").css("background-image", "url(\"../images/les_actus/chevron.png\")");
}

function chevronBlanc2() {
    $(".chevron2").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronNoir2() {
    $(".chevron2").css("background-image", "url(\"../images/les_actus/chevron.png\")");
}

function chevronBlanc3() {
    $(".chevron3").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronNoir3() {
    $(".chevron3").css("background-image", "url(\"../images/les_actus/chevron.png\")");
}

function chevronBlanc4() {
    $(".chevron4").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronNoir4() {
    $(".chevron4").css("background-image", "url(\"../images/les_actus/chevron.png\")");
}


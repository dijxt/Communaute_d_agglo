//faire en sorte que lorsque que
//i .lireArticle est survolé, l'image des chevrons change (chevrons noirs → chevrons blancs autre image gimp)

$(init);

function init(){
    $(".lireLarticle1").mouseover(chevronBleu1);
    $(".lireLarticle1").mouseout(chevronBlanc1);

    $(".lireLarticle2").mouseover(chevronBleu2);
    $(".lireLarticle2").mouseout(chevronBlanc2);

    $(".lireLarticle3").mouseover(chevronBleu3);
    $(".lireLarticle3").mouseout(chevronBlanc3);

    $(".lireLarticle4").mouseover(chevronBleu4);
    $(".lireLarticle4").mouseout(chevronBlanc4);
}

function chevronBleu1(){
    $(".chevron1").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc1(){
    $(".chevron1").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronBleu2(){
    $(".chevron2").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc2(){
    $(".chevron2").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronBleu3(){
    $(".chevron3").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc3(){
    $(".chevron3").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronBleu4(){
    $(".chevron4").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc4(){
    $(".chevron4").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

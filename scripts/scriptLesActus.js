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

    $(".lireLarticle5").mouseover(chevronBleu5);
    $(".lireLarticle5").mouseout(chevronBlanc5);

    $(".lireLarticle6").mouseover(chevronBleu6);
    $(".lireLarticle6").mouseout(chevronBlanc6);

    $(".lireLarticle7").mouseover(chevronBleu7);
    $(".lireLarticle7").mouseout(chevronBlanc7);

    $(".lireLarticle8").mouseover(chevronBleu8);
    $(".lireLarticle8").mouseout(chevronBlanc8);

    $(".article").mouseover(zoomImg);
    $(".article").mouseout(dezoomImg);

}

function zoomImg(){
    let numArticle = $(this).attr('id');

    numArticle = numArticle.replace(/[^0-9]/g,'');

    $("#a"+numArticle+"ImgContent").css("transform", "scale(1.2)");
}

function dezoomImg(){
    let numArticle = $(this).attr('id');

    numArticle = numArticle.replace(/[^0-9]/g,'');

    $("#a"+numArticle+"ImgContent").css("transform", "scale(1)");
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

function chevronBleu5(){
    $(".chevron5").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc5(){
    $(".chevron5").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronBleu6(){
    $(".chevron6").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc6(){
    $(".chevron6").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronBleu7(){
    $(".chevron7").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc7(){
    $(".chevron7").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}

function chevronBleu8(){
    $(".chevron8").css("background-image", "url(\"../images/les_actus/chevronBleu.png\")");
}

function chevronBlanc8(){
    $(".chevron8").css("background-image", "url(\"../images/les_actus/chevronBlanc.png\")");
}
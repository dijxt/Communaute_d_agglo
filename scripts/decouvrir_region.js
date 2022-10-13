var butt1;
var butt2;
var butt3;
var butt4;
var nbrImages;
var trans;
var cells1;
var cells2;
var cells3;
var tab;
var cells1Tab2;
var cells1Tab1;
var cells1Tab3;
var cells1Tab4;
var cells2Tab2;
var cells2Tab1;
var cells2Tab3;
var cells2Tab4;
var cells3Tab2;
var cells3Tab1;
var cells3Tab3;
var cells3Tab4;
var tab1;
var tab2;
var titreTab;
var tab3;
var tab4;
var transDroit;
var transGauche;
function init() {
    butt1=document.getElementById("offre");
    butt2= document.getElementById("culture");
    butt3= document.getElementById("equipements");
    butt4= document.getElementById("vie");

    titreTab = document.getElementById("titreTab");
    cells1 = document.getElementsByClassName("cellIntitule");
    cells2 = document.getElementsByClassName('cellLiens');
    cells3= document.getElementsByClassName("cell");
    cells1Tab1 = new Array ("L’Office de tourisme Privas Centre Ardèche", "Les voies douces", "Les chemins de randonnées", "Les villages de caractère : Beauchastel et Chalencon", "Le belvédère de la vallée de l’Eyrieux (à Saint Michel de Chabrillanoux)", "4 sites de baignade aménagés", "Taxe de séjour");
    cells1Tab2=new Array("Théâtre de Privas", "« Espace culturel Louis Nodon » à Vernoux en Vivarais", "Saison culturelle 19/20", "Éducation Artistique et Culturelle 19/20", "Culture scientifique, technique et industrielle", "Patrimoine", "Soutien matériel aux pratiques artistiques et à la création", "Espace d’art contemporain du Théâtre de Privas");
    cells1Tab3= new Array("CAP’AZUR, centre aquatique à Privas", "Gymnase de l’Eyrieux à Saint Sauveur de Montagut", "Site sportif de Cintenat à Saint Étienne de Serre", "Stade à Vernoux en Vivarais", "Espace multisports à Vernoux en Vivarais", "Piscine à Vernoux en Vivarais", "Piscine à Beauchastel");
    cells1Tab4 = new Array("Les forums des associations", "L’appel à projets pour l’organisation de manifestations touristiques, sportives et culturelles");
    tab1 = document.getElementById("deroul1");
    cells2Tab1 = new Array("https://www.privas-centre-ardeche.fr/L-Office-de-tourisme-Privas-Centre", "https://www.privas-centre-ardeche.fr/Les-voies-douces-104","https://www.privas-centre-ardeche.fr/Les-chemins-de-randonnees", "https://www.privas-centre-ardeche.fr/Les-villages-de-caractere", "https://www.privas-centre-ardeche.fr/Le-belvedere-de-la-vallee-de-l", "https://www.privas-centre-ardeche.fr/4-sites-de-baignade-amenages", "https://www.privas-centre-ardeche.fr/Taxe-de-sejour");
    cells2Tab2 = new Array("https://www.privas-centre-ardeche.fr/Theatre-de-Privas", "https://www.privas-centre-ardeche.fr/Espace-culturel-Louis-Nodon-a", "https://www.privas-centre-ardeche.fr/Saison-culturelle-19-20", "https://www.privas-centre-ardeche.fr/Education-Artistique-et-Culturelle", "https://www.privas-centre-ardeche.fr/Culture-scientifique-technique-et", "https://www.privas-centre-ardeche.fr/Patrimoine", "https://www.privas-centre-ardeche.fr/Soutien-materiel-aux-pratiques", "https://www.privas-centre-ardeche.fr/Espace-d-art-contemporain-du");
    cells2Tab3 = new Array("https://www.privas-centre-ardeche.fr/CAP-AZUR-centre-aquatique-a-Privas", "https://www.privas-centre-ardeche.fr/Gymnase-de-l-Eyrieux", "https://www.privas-centre-ardeche.fr/Site-sportif-de-Cintenat-a-Saint", "https://www.privas-centre-ardeche.fr/Stade-a-Vernoux-en-Vivarais", "https://www.privas-centre-ardeche.fr/Espace-multisports-a-Vernoux-en", "https://www.privas-centre-ardeche.fr/Piscine-a-Vernoux-en-Vivarais", "https://www.privas-centre-ardeche.fr/Piscine-a-Beauchastel");
    cells2Tab4 = new Array("https://www.privas-centre-ardeche.fr/Les-forums-des-associations", "https://www.privas-centre-ardeche.fr/L-appel-a-projets-pour-l");

    cells3Tab1 = new Array("tel:+33 4 75 20 81 81", "tel:+33 4 75 29 11 15", "tel:+33 4 75 20 81 81", "tel:+33 4 75 58 19 72", "tel:+33 4 75 20 81 81", "tel:+33 4 75 20 81 81", "tel:+33 4 75 20 81 81");
    cells3Tab2 = new Array("tel:+33 4 75 64 93 39", "tel:+33 4 75 61 35 18", "", "", "", "", "tel:+33 4 75 64 07 07", "tel:+33 9 70 65 01 15");
    cells3Tab3 = new Array("tel:+33 4 28 70 25 38", "", "", "tel:+33 4 75 61 35 18", "tel:+33 4 75 61 35 18", "tel:+33 4 28 70 25 39", "");
    cells3Tab4 = new Array("tel:+33 4 75 64 07 07", "tel:+33 4 75 64 07 07");
    tab=document.getElementById("tab");

    tab2 = document.getElementById("deroul2");
    tab3 = document.getElementById("deroul3");
    tab4 = document.getElementById("deroul4");
    nbrImages = 4;
    transGauche=document.getElementById("gauche");
    transDroit = document.getElementById("droit");
    trans = 0;
    transDroit.addEventListener("click", defilDroit);
    transGauche.addEventListener("click", defilGauche);
    transGauche.style="z-index:0;"
    tab1.addEventListener('click', modifTab1);
    tab2.addEventListener('click', modifTab2);
    tab3.addEventListener('click', modifTab3);
    tab3.addEventListener('click', modifTab3);
    tab4.addEventListener('click', modifTab4);

    butt1.addEventListener('click', modifTab1);
    butt2.addEventListener('click', modifTab2);
    butt3.addEventListener('click', modifTab3);
    butt4.addEventListener('click', modifTab4);


    modifTab1();
}
function modifTab1() {
    titreTab.innerHTML="Offre touristique"
    for (var i = 0; i<8; ++i) {
        cells1[i].innerHTML = cells1Tab1[i];
        var cpt=i+1;
        var liens = document.getElementById('cellLiens'+cpt);
        var cell =  document.getElementById('cell'+cpt);
        liens.textContent=" ici";
        liens.href = cells2Tab1[i];
        cell.textContent = cells3Tab1[i];
        cell.href = cells3Tab1[i];
        if (i==7) {
            liens.textContent="";
            cell.textContent="";
            cells1[i].innerHTML="";
        }
    }
    tab.style="empty-cells : hide;";
}
function modifTab2() {
    titreTab.innerHTML="Culture"
    for (var i = 0; i<8; ++i) {
        cells1[i].innerHTML = cells1Tab2[i];
        var cpt=i+1;
        var liens = document.getElementById('cellLiens'+cpt);
        var cell =  document.getElementById('cell'+cpt);
        liens.textContent=" ici";

        liens.href = cells2Tab2[i];
        cell.textContent = cells3Tab2[i];
        cell.href = cells3Tab2[i];

    }
}
function modifTab3() {
    titreTab.innerHTML="Equipements sportifs"
    for (var i = 0; i<8; ++i) {
        cells1[i].innerHTML = cells1Tab3[i];
        var cpt=i+1;
        var liens = document.getElementById('cellLiens'+cpt);
        var cell =  document.getElementById('cell'+cpt);
        liens.textContent=" ici";

        liens.href = cells2Tab3[i];
        cell.textContent = cells3Tab3[i];
        cell.href = cells3Tab3[i];
        if (i==7) {
            liens.textContent="";
            cell.textContent="";
            cells1[i].innerHTML="";
        }
    }
    tab.style="empty-cells : hide;";

}
function modifTab4() {
    titreTab.innerHTML="Vie associative"
    for (var i = 0; i<8; ++i) {
        if (i>=2) {
            var cpt=i+1;
            var liens = document.getElementById('cellLiens'+cpt);
            var cell =  document.getElementById('cell'+cpt);
            cells1[i].innerHTML="";
            liens.textContent="";
            cell.textContent="";
        }
        else {
            cells1[i].innerHTML = cells1Tab4[i];
            var cpt=i+1;
            var liens = document.getElementById('cellLiens'+cpt);
            var cell =  document.getElementById('cell'+cpt);
            liens.href = cells2Tab4[i];
            cell.textContent = cells3Tab4[i];
            cell.href = cells3Tab4[i];
        }
    }
    tab.style="empty-cells : hide";

}
function defilDroit() {
    if (trans!=nbrImages-1) {
        trans = trans +1;
        transGauche.style="z-index:10;";
    }
    imgCARR.style.transform="translate("+document.getElementById('carroussel').clientWidth*(-1)*trans+"px)";
    imgCARR.style.transition="all 0.5s"
    if (trans==nbrImages-1)
        transDroit.style="z-index:0;";

}
function defilGauche() {

    if (trans!=0) {
        trans=trans-1;
        transDroit.style="z-index:10;"
    }
    imgCARR.style.transform="translate("+document.getElementById('carroussel').clientWidth*(-trans)+"px)";
    imgCARR.style.transition="all 0.5s"
    if (trans==0) {
        transGauche.style="z-index:0;"
    }

}
window.addEventListener("load", init);
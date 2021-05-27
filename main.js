const divResultat = document.querySelector("#resultat")
//tableau qui va gérée la position des animaux
var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

// var tabResultat = [
//     [1,4,3,4],
//     [1,2,3,2],
//     [7,8,6,5],
//     [8,7,5,6],
// ]
var tabResultat = genereTableauAleatoire();
var oldSelection=[];
var nbAffiche = 0;
var ready = true;

afficherTableau();

function afficherTableau(){
    var txt ="";
// correspond a chaque ligne
    for(var i=0; i < tabJeu.length ; i++){
        txt += "<div>";
        for(var j=0; j < tabJeu[i].length ; j++){
            if(tabJeu[i] [j] === 0){
// importation d'image
            txt +="<button class='btn btn-secondary m-2' style='width:100px;height:100px' onclick='verif(\""+i+" "+j+"\")'>Elodie-Tom</button>";
            }else{
                txt += "<img src= '"+getImage(tabJeu [i] [j])+"' style='width:100px;height:100px' class='m-2'>";
            }
        }
        txt += "</div>";
    }

    divResultat.innerHTML = txt;
}
function getImage(valeur){
    var imgtxt = "";
    switch(valeur){
        case 1 : imgtxt += "image/elephant.png";
        break;
        case 2 : imgtxt += "image/giraffe.png";
        break;
        case 3 : imgtxt += "image/hippo.png";
        break;
        case 4 : imgtxt += "image/monkey.png";
        break;
        case 5 : imgtxt += "image/panda.png";
        break;
        case 6 : imgtxt += "image/parrot.png";
        break;
        case 7 : imgtxt += "image/penguin.png";
        break;
        case 8 : imgtxt += "image/rabbit.png";
        break;
        default : console.log("cas non pris en compte")
    }
    return imgtxt;
//verifier le bon fonctionnement des btn
}
function verif(bouton){
    if(ready){
    }
    nbAffiche++;
    var ligne = bouton.substr(0,1);
    var colonne = bouton.substr(2,1);
    console.log(ligne);
    console.log(colonne);
    tabJeu[ligne] [colonne] = tabResultat[ligne] [colonne];
    afficherTableau();
    if(nbAffiche>1){
        ready = false;
        setTimeout(() => {
        // verification
        if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
            tabJeu[ligne][colonne] = 0;
            tabJeu[oldSelection[0]][oldSelection[1]] = 0;
        }

        afficherTableau();
        ready =true;
        nbAffiche = 0;
        oldSelection=[ligne,colonne];
    },1000)
}else {
     oldSelection=[ligne,colonne];
}
}


function genereTableauAleatoire(){
    var tab = [];


    var nbImagePosition=[0,0,0,0,0,0,0,0];

    for(var i = 0 ; i < 4 ; i++){
        var ligne = [];
        for(var j = 0 ; j < 4 ; j++){
            var fin = false;
            while(!fin){
                var randomImage = Math.floor(Math.random() * 8);
                if (nbImagePosition[randomImage] < 2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
            
            
                }
            }
        }
        tab.push(ligne);
    }
    return tab;
}
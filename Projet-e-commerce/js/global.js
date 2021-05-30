/*  ANCIEN CODE SANS LE TUTO */


// var btnAchat = document.querySelector(".selectionne");
// var mesRequetes = new XMLHttpRequest();
// var requeteURL = '../article.json'
// var list = []; 
// let map;
// a = 0

// mesRequetes.open('GET', requeteURL);
// mesRequetes.send();
// mesRequetes.onload = function() {
//   mesData = JSON.parse(mesRequetes.responseText);
//   renderHTML(mesData);
  
// };

// function renderHTML(data){
//   for (i = 0; i < data.length; i++) {
//     section.children[i].children[0].innerHTML = "<img src=" + mesData[i].image + "  " + "alt=" + mesData[i].name +">";
//     section.children[i].children[1].innerHTML = mesData[i].name;
//     section.children[i].children[2].innerHTML = mesData[i].price;
//     section.children[i].children[3].innerHTML = mesData[i].recipes;
//     console.log("data :", data);
//     section.children[i].children[5].addEventListener("click", function(data){
//       containerPanier.style.display = "flex";
//       paraPanier.style.display = "none";

//       for (e = 0; e < data.length; e++){
//         containerPanier.children.children.innerHTML = "<img src=" + mesData[e].image + "  " + "alt=" + mesData[e].name +">";
//         // containerPanier.children.children.innerHTML = "<img src= ../img/burger-2.png >";
//       }
//     });
//   }
// }


// Nouveau code avec le tuto

var xhr = new XMLHttpRequest();
var requeteUrl = '../data/article.json';
var containerPanierArticle = document.querySelector('.container-panier-article'); 
var panier = document.querySelector('#img-panier'); 
var paragraphePanier = document.querySelector('.container-panier > p');
var sectionMenu = document.querySelector('#container-article-menu');
var btnAchatVersPanier = document.querySelector('.btn-paiment');
var iconBurger = document.querySelector('#burger');
var menuBurger = document.querySelector('.container-menu-burger');
var cartItemId = 1;
// démarrer le JSON au chargement de la page js à l'ouverture de la page


window.addEventListener('DOMContentLoaded', () => {
    chargeJSON();
    chargerPanier();
});

iconBurger.addEventListener('click', () => {
    menuBurger.class.display = "block";
});

// ouvrir le panier au clic 
panier.addEventListener('click', () => {
    containerPanierArticle.class.display = "grid";
});

sectionMenu.addEventListener('click', ajouterAuPanier); 


function majPanierInfo(){
    var infoPanier = trouverInfoPanier();
}


// Fonction pour charger le json 

function chargeJSON(){
    fetch(requeteUrl)
    .then(response => response.json())
    .then(data => {
        var html = '';
        // Permet de compter le nom d'article dans le JSON 
        data.forEach(e => {
            // code html afin qu'il puisse afficher les infos du JSON dans la balise article
            html += `
                <article class="article-burger">
                    <div class="photo">
                        <img src = "${e.image}" alt= "Photo du ${e.name} venant du compte instagram de @lecamionquifume">
                    </div>
                    <h4 class="product-name">${e.name}</h4>
                    <p>${e.price}€</p>
                    <p class="recette">${e.recipes}</p>
                    <div>
                        <input type="checkbox" id="menu" name="menu" value= "0" >
                        <label for="menu">Menu</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="boisson-une" name="boisson-une">
                        <label for="boisson-une">Coca Cola 33cl</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="boisson-deux" name="boisson-deux">
                        <label for="boisson-deux">Schweppes Agrum 33cl</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="boisson-trois" name="boisson-trois">
                        <label for="boisson-trois">Orangina 33cl</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="boisson-quatre" name="boisson-quatre">
                        <label for="boisson-quatre">Lipton Ice Tea 50cl</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="boisson-cinq" name="boisson-cinq">
                        <label for="boisson-cinq">Limonade citron maison</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="accompagnement-un" name="accompagnement-un">
                        <label for="accompagnement-un">Frite maison</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="accompagnement-deux" name="accompagnement-deux">
                        <label for="accompagnement-deux">Frite cheddar</label>
                    </div>
                    <hr>
                    <div id="container-boisson-accomp-menu">
                        <input type="checkbox" id="accompagnement-trois" name="accompagnement-trois">
                        <label for="accompagnement-trois">Frite cheddar/bacon</label>
                    </div>
                    <button class="selectionne">Acheter</button>
                </article>
            `;
        });
        /* Puis ajouter ce code html au container article */
        sectionMenu.innerHTML = html;
    });
    // var checkboxInput = document.querySelector('input#menu');
    // var afficherBoisson = document.querySelector('#container-boisson-accomp-menu');
    // checkboxInput.addEventListener('click', (i) => {
    //     console.log("i :", i.target);
    //     if (checkboxInput.checked == true){
    //         afficherBoisson.style.display = 'block'; 
    //     }
    //     else{
    //         afficherBoisson.style.display = 'none';
    //     }
    // });
}



function ajouterAuPanier(e){
    if(e.target.classList.contains('selectionne')){
        let produits = e.target.parentElement;
        infoProduits(produits);
    }
}

/* Récupérer les infos sur le produit */ 


function infoProduits(produits){
    let produitsInfos = {
        id: cartItemId,
        image: produits.querySelector('.photo img').src,
        name: produits.querySelector('.product-name').textContent,
        prix: produits.querySelector('.article-burger > p').textContent
    }
    cartItemId++;
    affichageDansPanier(produitsInfos);
    sauvegarderDansLocal(produitsInfos);
}


function affichageDansPanier(produits){
    const containerPanier = document.createElement('div'); 
    containerPanier.className = 'container-panier';
    containerPanier.innerHTML = `
        <div class="photo-article">
            <img src="${produits.image}" alt="">
        </div>
        <div class="name-article">
            <h4>${produits.name}</h4>
        </div>
        <div class="container-btn">
            <div class="fermer"></div>
        </div>
        <div class="container-prix">
            <p>${produits.prix}</p>
        </div>
    `;
    containerPanierArticle.appendChild(containerPanier);
}

/* fonction pour vérifier si une case est check et faire apparaitre le menu boissons */
/* Pas réussis a faire */

/* À faire !!  */ 
// checkboxInput.addEventListener('click', (e) => {
//     console.log(e.target);
//     afficherBoisson.style.display = 'block';
// });



// sauvegarder les produits dans le localstorage 

function sauvegarderDansLocal(elements){
    let elementsProduits = avoirElementsDansStorage();
    console.log(elementsProduits);
    elementsProduits.push(elements);
    localStorage.setItem('elementsProduits', JSON.stringify(elementsProduits));
}


function avoirElementsDansStorage(){
    return localStorage.getItem('elementsProduits') ? JSON.parse (localStorage.getItem('elementsProduits')) : [];
}

function chargerPanier(){
    var produits = avoirElementsDansStorage();
    if(produits.length < 1){
        cartItemId = 1;
    }else{
        cartItemId = produits[produits.length - 1].id;
        cartItemId++;
    }
    console.log(cartItemId);
    produits.forEach(e => ajouterAuPanier(e));
}



function trouverInfoPanier(){
    var produits = avoirElementsDansStorage();
    var total = produits.reduce((acc, e) =>{
        var prix = parseFloat(e.prix.substr(1));
        return acc += prix;
    }, 0);
    console.log(total);
}
trouverInfoPanier();



function initMap() {
    map = new google.maps.Map(document.getElementById("map-google"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
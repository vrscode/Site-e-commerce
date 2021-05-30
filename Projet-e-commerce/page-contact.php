<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <title>Page contact</title>
    <meta name="description" content="Le camion qui fume est avant tout un burger trucks qui s'est installé la première à la bibliothèque François Mitterand. LCQF à eu un tel succès que maitenant nous nous sommes installé dans une plusieurs lieu physique. ">
    <meta charset="UTF-8">
    <meta name="viewport" content="height=device-height width=device-width, initial-scale=1.0, minimum-scale=1.0 maximum-scale=1.0, user-scalable=no target-densitydpi=device-dpi">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/main-contact.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/responsive.css">
</head>
<body id="contact">
    <header class="header-contact-menu">
        <nav>
            <a href="index.html"><img src="./img/logo-lcqf.png" alt="Logo le camion qui fume"></a>
            <div class="container-flex-ul">
                <ul class="list-menu">
                    <li><a class="link-list-menu" href="index.html">Accueil</a></li>
                    <li><a class="link-list-menu" href="#">Restaurants</a></li>
                    <li><a class="link-list-menu" href="menu.html">Menu</a></li>
                    <li><a class="link-list-menu" href="#">Livraisons</a></li>
                    <li><a class="link-list-menu" href="page-contact.php">Contact</a></li>
                    <li><img id="img-panier" src="./img/panier.png" alt="icône panier"></li>
                    <li><a class="link-list-menu" href="#"><div id="burger"></div></a></li>
                </ul>
            </div>
        </nav>

        <!-- Ouverture page panier -->
        <div id="container-panier-article">
            <button class="btn-paiment">Sous total: 0€ <br> Passez la commande</button>
        </div>
    </header>
    <main class="main-contact">
        <h1>Une envie ? Une question ?</h1>
        <div class="main-contact-flex">
            <h2>Formulaire de contact</h2>
            <p>*: Champs obligatoire</p>
            <form action="contactpage.php" method="POST">
                <div class="input-container">
                    <label for="prenom">Prénom, nom, raison social :</label>
                    <input type="text" name="name" placeholder="Votre prénom, nom ou raison social">
                    <label for="telephone" class="margin">Téléphone :</label>
                    <input type="tel" name="phone" placeholder="Votre numéro de téléphone">
                </div>
                <div class="input-container">
                    <label for="email">Email* :</label>
                    <input type="email" name="email" id="email" size="30" required placeholder="Votre email">
                    <label for="raison" class="margin">Votre message concerne* :</label>
                    <select name="reason" id="" required>
                        <option value="raison">-</option>
                        <option value="raison">Idée</option>
                        <option value="raison">Réclamation</option>
                        <option value="raison">Média</option>
                        <option value="raison">Autre raison</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="message">Message* :</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Vous pouvez écrire votre message ici" required></textarea>
                </div>
                <?php
                if(isset($msg)){
                    echo($msg);
                }
                ?>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </main>
    <footer>
        <div class="flex-footer">
            <section class="container-menu">
                <h3>Nos réseaux</h3>
                <ul class="list-footer">
                    <li><a class="link-list-footer" href="http://instagram.com/lecamionquifume" target="_blank">Instagram</a></li>
                    <li><a class="link-list-footer" href="">Twitter</a></li>
                    <li><a class="link-list-footer" href="">Facebook</a></li>
                    <li><a class="link-list-footer" href="">Linkedin</a></li>
                </ul>
            </section>
            <section class="container-menu">
                <h3>Nos restaurants</h3>
                <ul class="list-footer">
                    <li><a class="link-list-footer" href="">Odeon <br>
                    <p>6 RUE GRÉGOIRE DE TOURS – 75006</p></a>
                    </li>
                    <li><a class="link-list-footer" href="">Mk2 blibliothèque <br>
                        <p>132 AVENUE DE FRANCE – 75013</p></a>
                    </li>
                    <li><a class="link-list-footer" href="">Oberkampf<br>
                        <p>66 RUE OBERKAMPF – 75011</p></a>
                    </li>
                    <li><a class="link-list-footer" href="">Pathé ivry<br>
                        <p>5 RUE FRANÇOIS MITTERAND – 94200</p></a>
                    </li>
                </ul>
            </section>
            <section class="container-menu">
                <h3>Notre Localisation</h3>
                <div id="map-google"></div>
            </section>
        </div>
        <div>
            <a href="#"><p>Mention légale</p></a>
        </div>
    </footer>
    <script async
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>
    <script src="./js/global.js"></script>
</body>
</html>
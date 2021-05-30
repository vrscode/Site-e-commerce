<?php

var_dump($_POST);
$message = $_POST['message'];
$email = $_POST['email'];
$headers = "From: ".$email;

mail('versusartists@gmail.com', 'Formulaire de contact', $message, $headers);   
// if (isset($_POST['submit'])){
//     $name = $_POST['name'];
//     $phone = $_POST['phone'];
//     $email = $_POST['email'];
//     $reason = $_POST['reason'];
//     $message = $_POST['message'];

//     if (!empty($_POST['name']) AND !empty($_POST['phone']) AND !empty($_POST['email']) AND !empty($_POST['reason']) AND !empty($_POST['message'])){

//     }
//     else{
//         $msg = "Champ vide ou incorrecte";
//     }

//     $mailto = "VersusArtists@gmail.com";
//     $headers = "From: ".$email;
//     $txt = "Tu as reçu un mail de".$name."./n/n".$message;

//     mail($name, $phone, $email, $reason, $message, $headers);
//     header("Location: contact.php?mailsend");
// }
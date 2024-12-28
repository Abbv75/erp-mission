<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['matricule'],
        $_POST['date_achat'],
        $_POST['type'],
        $_POST['marque']
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * FROM vehicule WHERE matricule=?');
    $query->execute([$matricule]);

    if ($query->fetch()) {
        $response->satutCode403("Une voiture existe deja avec ce login");
    }

    $query = $bdd->prepare('INSERT INTO vehicule (
        matricule, 
        date_achat, 
        type, 
        marque
    ) VALUES (?,?,?,?) ');

    if (!$query->execute([
        $matricule,
        $date_achat,
        $type,
        $marque,
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500($th->getMessage());
}

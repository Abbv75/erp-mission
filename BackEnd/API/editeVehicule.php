<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['id'],
        $_POST['matricule'],
        $_POST['date_achat'],
        $_POST['type'],
        $_POST['marque']
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * FROM vehicule WHERE id_vehicule=?');
    $query->execute([$id]);

    if (!$query->fetch()) {
        $response->satutCode404("vehicule introuvable");
    }

    $query = $bdd->prepare('UPDATE vehicule SET
        matricule=?, 
        date_achat=?, 
        type = ?, 
        marque = ? 
        WHERE id_vehicule = ?
    ');

    if (!$query->execute([
        $matricule,
        $date_achat,
        $type,
        $marque,
        $id
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

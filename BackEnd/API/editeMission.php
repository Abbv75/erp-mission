<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['date_depart'],
        $_POST['date_arrivee'],
        $_POST['kilometrage'],
        $_POST['id'],
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('UPDATE mission SET
        date_depart=?, 
        date_arrivee=?, 
        kilometrage = ?
        WHERE id_mission = ?
    ');

    if (!$query->execute([
        $date_depart,
        $date_arrivee,
        $kilometrage,
        $id,
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500($th->getMessage());
}

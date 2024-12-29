<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset($_POST['id'])) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('UPDATE demandeReparation SET statut = ?, date_reparation=? WHERE id_voiture=?');

    if (!$query->execute([
        "validee",
        date('Y-m-d'),
        $id
    ])) {
        $response->satutCode404();
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

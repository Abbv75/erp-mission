<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['id_mission'],
        $_POST['id_vehicule'],
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * 
        FROM missionVehicule
        WHERE id_mission = ? AND id_vehicule = ?
    ');

    $query->execute([$id_mission, $id_vehicule]);

    if ($query->fetch()) {
        $response->satutCode403("Cette voiture est deja affectée a cette mission");
    }

    $query = $bdd->prepare('INSERT INTO missionVehicule (
        id_mission, 
        id_vehicule
    ) VALUES (?,?) ');

    if (!$query->execute([
        $id_mission,
        $id_vehicule
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['id_mission'],
        $_POST['id_participant'],
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * 
        FROM missionParticipant
        WHERE id_mission = ? AND id_participant = ?
    ');

    $query->execute([$id_mission, $id_participant]);

    if ($query->fetch()) {
        $response->satutCode403("Cet utilisateur est deja affecté a cette mission");
    }

    $query = $bdd->prepare('INSERT INTO missionParticipant (
        id_mission, 
        id_participant
    ) VALUES (?,?) ');

    if (!$query->execute([
        $id_mission,
        $id_participant
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

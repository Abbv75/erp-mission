<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset($_POST['id_utilisateur'], $_POST['id_mission'])) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('DELETE FROM missionParticipant WHERE id_mission=? AND id_participant=?');

    if (!$query->execute([$id_mission, $id_utilisateur])) {
        $response->satutCode404();
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500($th->getMessage());
}

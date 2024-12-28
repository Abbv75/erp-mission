<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_GET['id']
    )) {
        $response->satutCode403();
    }

    extract($_GET);

    $query = $bdd->prepare('SELECT * 
        FROM missionParticipant, utilisateur , role
        WHERE missionParticipant.id_mission = ?
            AND missionParticipant.id_participant = utilisateur.id_utilisateur
            AND utilisateur.id_role = role.idRole
    ');

    $query->execute([$id]);

    if (!$res = $query->fetchAll(PDO::FETCH_ASSOC)) {
        $response->satutCode404();
    }

    $response->setData($res);

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

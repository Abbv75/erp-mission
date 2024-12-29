<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    $query = $bdd->query('SELECT * 
        FROM vehicule
        LEFT JOIN demandeReparation
        ON vehicule.id_vehicule = demandeReparation.id_voiture
        ORDER BY id_vehicule DESC
    ');

    if (!$res = $query->fetchAll(PDO::FETCH_ASSOC)) {
        $response->satutCode404();
    }

    $response->setData($res);

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

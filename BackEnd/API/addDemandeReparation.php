<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['id']
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * FROM demandeReparation WHERE id_voiture=?');
    $query->execute([$id]);

    if ($query->fetch()) {
        $response->satutCode403("Une demande existe deja");
    }

    $query = $bdd->prepare('INSERT INTO demandeReparation (
        id_voiture
    ) VALUES (?) ');

    if (!$query->execute([
        $id
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500($th->getMessage());
}

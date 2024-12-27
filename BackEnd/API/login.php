<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset($_POST['login'], $_POST['password'])) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * FROM utilisateur WHERE login=? AND password=?');
    $query->execute([$login, $password]);

    if (!$res = $query->fetch(PDO::FETCH_ASSOC)) {
        $response->satutCode404();
    }

    $response->setData($res);

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

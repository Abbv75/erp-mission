<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['nom'],
        $_POST['login'],
        $_POST['password'],
        $_POST['idRole']
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * FROM utilisateur WHERE login=?');
    $query->execute([$login]);

    if ($query->fetch()) {
        $response->satutCode403("Un utilisateur existe deja avec ce login");
    }

    $query = $bdd->prepare('INSERT INTO utilisateur (
        nom_utilisateur, 
        prenom_utilisateur, 
        login, 
        password, 
        id_role, 
        telephone
    ) VALUES (?,?,?,?,?,?) ');

    if (!$query->execute([
        $nom,
        $prenom ?? null,
        $login,
        $password,
        $idRole,
        $telephone ?? null,
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

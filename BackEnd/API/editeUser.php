<?php
require "../scripts/CORS.php";
require "../scripts/connexion_bd.php";
require "../classes/Response.php";

$response = new Response(null, 200, []);

try {
    if (!isset(
        $_POST['id'],
        $_POST['nom'],
        $_POST['login'],
        $_POST['password'],
        $_POST['idRole']
    )) {
        $response->satutCode403();
    }

    extract($_POST);

    $query = $bdd->prepare('SELECT * FROM utilisateur WHERE id_utilisateur=?');
    $query->execute([$id]);

    if (!$query->fetch()) {
        $response->satutCode404("utilisateur introuvable");
    }

    $query = $bdd->prepare('UPDATE utilisateur SET
        nom_utilisateur=?, 
        prenom_utilisateur=?, 
        login = ?, 
        password = ?, 
        id_role = ?, 
        telephone = ?
        WHERE id_utilisateur = ?
    ');

    if (!$query->execute([
        $nom,
        $prenom ?? null,
        $login,
        $password,
        $idRole,
        $telephone ?? null,
        $id
    ])) {
        $response->satutCode500("sauvegarde echouer");
    }

    $response->satutCode200();
} catch (\Throwable $th) {
    $response->satutCode500();
}

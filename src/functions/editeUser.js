import axios from "axios";

export const editeUser = async (
    nom,
    login,
    password,
    idRole,
    prenom = undefined,
    telephone = undefined,
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/addUser.php`,
            {
                nom,
                prenom,
                telephone,
                login,
                password,
                idRole,
            }
        );

        console.log('====================================');
        console.log("Utilisateur ajouter avec success");
        console.log('====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
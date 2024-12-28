import axios from "axios";

export const deleteUser = async (id_utilisateur) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/deleteUser.php`,
            {
                id_utilisateur : id_utilisateur
            }
        );

        console.log('Utilisateur supprimer====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
import axios from "axios";

export const addDemandeReparation = async (
    id
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/addDemandeReparation.php`,
            {
                id
            }
        );

        console.log('====================================');
        console.log("Demande ajouter avec success");
        console.log('====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
import axios from "axios";

export const validerDemandeReparation = async (id) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/validerDemandeReparation.php`,
            {
                id: id
            }
        );

        console.log('Vehicule valider====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
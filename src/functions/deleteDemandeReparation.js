import axios from "axios";

export const deleteDemandeReparation = async (id) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/deleteDemandeReparation.php`,
            {
                id: id
            }
        );

        console.log('Vehicule supprimer====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
import axios from "axios";

export const deleteVehicule = async (id) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/deleteVehicule.php`,
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
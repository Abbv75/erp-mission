import axios from "axios";

export const deleteMissionVehicule = async (
    id_vehicule,
    id_mission
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/deleteMissionVehicule.php`,
            {
                id_vehicule,
                id_mission
            }
        );

        console.log('Vehicule supprimer====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
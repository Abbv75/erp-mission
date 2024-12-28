import axios from "axios";

export const addMissionVehicule = async (
    id_vehicule,
    id_mission
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/addMissionVehicule.php`,
            {
                id_vehicule,
                id_mission
            }
        );

        console.log('Vehicule ajouter ====================================');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
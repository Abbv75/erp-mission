import axios from "axios";

export const getAllMissionVehicule = async (idMission) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/getAllMissionVehicule.php?id=${idMission}`);

        const res = data.data;

        console.group('Liste des vehicules de la mission ====================================');
        console.table(res);
        console.groupEnd();

        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}
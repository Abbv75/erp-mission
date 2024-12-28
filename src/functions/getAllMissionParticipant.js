import axios from "axios";

export const getAllMissionParticipant = async (idMission) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/getAllMissionParticipant.php?id=${idMission}`);

        const res = data.data;

        console.group('Liste des participants de la mission ====================================');
        console.table(res);
        console.groupEnd();

        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}
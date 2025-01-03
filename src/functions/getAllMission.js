import axios from "axios";

export const getAllMission = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/getAllMission.php`);

        const res = data.data;

        console.group('Liste des vehicules ====================================');
        console.table(res);
        console.groupEnd();

        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}
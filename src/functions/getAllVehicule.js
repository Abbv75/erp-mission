import axios from "axios";

export const getAllUser = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/getAllVehicule.php`);

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
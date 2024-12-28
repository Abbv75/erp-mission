import axios from "axios";

export const getAllRole = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/getAllRole.php`);

        const res = data.data;

        console.group('Liste des roles ====================================');
        console.table(res);
        console.groupEnd();

        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}
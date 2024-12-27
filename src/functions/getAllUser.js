import axios from "axios";

export const getAllUser = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/getAllUser.php`);

        const res = data.data;

        console.group('Liste des utilisateurs====================================');
        console.table(res);
        console.groupEnd();

        localStorage.setItem("currentUser", JSON.stringify(res));

        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}
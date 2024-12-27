import axios from "axios";

export const login = async (login, password) => {
    try {
        const { data } = await axios.postForm(
            `${process.env.REACT_APP_API_URL}/login.php`,
            {
                login,
                password,
            }
        );

        const res = data.data;

        console.group('Current user====================================');
        console.table(res);
        console.groupEnd();

        localStorage.setItem("currentUser", JSON.stringify(res));

        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}
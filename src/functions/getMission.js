import axios from "axios";

export const getMission = async (id) => {
    try {
        const { data } = await axios.get(
            `${process.env.REACT_APP_API_URL}/getMission.php?id=${id}`,
            {
                id: id
            }
        );

        const res = data.data

        console.group('Mission ====================================');
        console.log(res);
        console.groupEnd();

        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}
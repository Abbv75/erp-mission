import axios from "axios";

export const deleteMission = async (id) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/deleteMission.php`,
            {
                id: id
            }
        );

        console.log('Mission supprimer====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
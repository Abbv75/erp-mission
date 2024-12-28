import axios from "axios";

export const editeMission = async (
    date_depart,
    date_arrivee,
    kilometrage,
    id,
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/editeMission.php`,
            {
                date_depart,
                date_arrivee,
                kilometrage,
                id,
            }
        );

        console.log('====================================');
        console.log("mission modifier avec success");
        console.log('====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
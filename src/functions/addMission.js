import axios from "axios";

export const addMission = async (
    date_depart,
    date_arrivee,
    kilometrage,
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/addMission.php`,
            {
                date_depart,
                date_arrivee,
                kilometrage,
            }
        );

        console.log('====================================');
        console.log("Mission ajouter avec success");
        console.log('====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
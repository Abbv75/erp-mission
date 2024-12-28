import axios from "axios";

export const addMissionParticipant = async (
    id_participant,
    id_mission
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/addMissionParticipant.php`,
            {
                id_participant,
                id_mission
            }
        );

        console.log('Participant ajouter ====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
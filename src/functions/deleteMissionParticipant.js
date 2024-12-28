import axios from "axios";

export const deleteMissionParticipant = async (
    id_utilisateur,
    id_mission
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/deleteMissionParticipant.php`,
            {
                id_utilisateur,
                id_mission
            }
        );

        console.log('Participant supprimer====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
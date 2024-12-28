import axios from "axios";

export const addVehicule = async (
    matricule,
    date_achat,
    type,
    marque,
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/addVehicule.php`,
            {
                matricule,
                date_achat,
                type,
                marque,
            }
        );

        console.log('====================================');
        console.log("Voiture ajouter avec success");
        console.log('====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
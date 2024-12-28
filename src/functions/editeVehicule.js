import axios from "axios";

export const editeVehicule = async (
    matricule,
    date_achat,
    type,
    marque,
    id,
) => {
    try {
        await axios.postForm(
            `${process.env.REACT_APP_API_URL}/editeVehicule.php`,
            {
                matricule,
                date_achat,
                type,
                marque,
                id,
            }
        );

        console.log('====================================');
        console.log("Vehicule modifier avec success");
        console.log('====================================');

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
import { Button, Stack } from '@mui/joy';
import React, { useCallback, useEffect, useState } from 'react';
import VoitureCard from '../../components/VoitureCard';
import { getAllVehicule } from '../../functions/getAllVehicule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { addDemandeReparation } from '../../functions/addDemandeReparation';
import { toast } from 'react-toastify';

const DemandeReparation = () => {
    const [voitureListe, setvoitureListe] = useState([]);

    const loadVehicule = useCallback(
        () => {
            getAllVehicule().then(res => res && setvoitureListe(res));
        },
        []
    );

    useEffect(
        () => {
            loadVehicule();
        },
        []
    );

    const addDemande = (id) => {
        addDemandeReparation(id).then(
            () => {
                toast.success("Votre demande a ete soumis avec success. Un gestionnaire prendra votre demande en charge.");
                loadVehicule();
            }
        ).catch(
            () => {
                toast.error("Une erreur est survenue lors de la soumission de votre demande.");
            }
        )
    }


    return (
        <Stack
            gap={2}
            direction={"row"}
            flexWrap={"wrap"}
        >
            {
                voitureListe.map(value => (
                    <VoitureCard
                        data={value}
                        button={(
                            <Button
                                endDecorator={
                                    <FontAwesomeIcon icon={faGears} />
                                }
                                onClick={() => addDemande(value.id_vehicule)}
                            >Demande une de reparation</Button>
                        )}
                    />
                ))
            }
        </Stack>
    )
}

export default DemandeReparation
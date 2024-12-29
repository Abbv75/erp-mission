import { Button, Stack, Typography } from '@mui/joy';
import React, { useCallback, useEffect, useState } from 'react';
import VoitureCard from '../../components/VoitureCard';
import { getAllVehicule } from '../../functions/getAllVehicule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { addDemandeReparation } from '../../functions/addDemandeReparation';
import { toast } from 'react-toastify';
import { deleteDemandeReparation } from '../../functions/deleteDemandeReparation';

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

    const handleDeleteDemande = (id) => {
        if (!window.confirm("Etes vous sur de vouloir annuler?")) {
            return false;
        }

        deleteDemandeReparation(id).then(
            () => {
                toast.success("Votre demande a ete annuler avec success. Un gestionnaire prendra votre demande en charge.");
                loadVehicule();
            }
        ).catch(
            () => {
                toast.error("Une erreur est survenue lors de la soumission de votre annulation.");
            }
        )
    }


    return (
        <Stack
            gap={2}
        >
            <Typography level="h4">Gerez les demandes de réparation des véhicules a ce niveau</Typography>

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
                                        <FontAwesomeIcon icon={
                                            value.statut == "en cours"
                                                ? faTimesCircle
                                                : faGears
                                        } />
                                    }
                                    color={
                                        value.statut == "en cours"
                                            ? "danger"
                                            : "primary"
                                    }
                                    onClick={() => {
                                        value.statut == "en cours"
                                            ? handleDeleteDemande(value.id_vehicule)
                                            : addDemande(value.id_vehicule)
                                    }}
                                >
                                    {
                                        value.statut == "en cours"
                                            ? "Annuler la demande"
                                            : "Demander une reparation"
                                    }
                                </Button>
                            )}
                        />
                    ))
                }
            </Stack>

        </Stack>
    )
}

export default DemandeReparation
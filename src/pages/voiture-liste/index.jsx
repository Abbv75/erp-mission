import { faCheckCircle, faFeatherAlt, faPlus, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, ButtonGroup, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import CustomTable from '../../components/CustomTable'
import EditionForm from './EditionForm'
import { toast } from 'react-toastify'
import { getAllVehicule } from '../../functions/getAllVehicule'
import { deleteVehicule } from '../../functions/deleteVehicule'
import { validerDemandeReparation } from '../../functions/validerDemandeReparation'
import { deleteDemandeReparation } from '../../functions/deleteDemandeReparation'

const VoitureListe = () => {
    const [data, setdata] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);
    const [currentValue, setcurrentValue] = useState(null);

    const loadVehicule = useCallback(
        () => {
            getAllVehicule().then(res => res && setdata(res));
            setcurrentValue(null);
        },
        []
    );

    useEffect(
        () => {
            loadVehicule();
        },
        []
    );

    const handleDelete = (id) => {
        if (
            window.confirm("Etes vous sur de vouloir supprimer?")
        ) {
            deleteVehicule(id).then(
                () => {
                    toast.success("Suppression reussit");
                    loadVehicule();
                }
            ).catch(
                () => {
                    toast.error("Suppression echouer");
                }
            )
        }
    }

    const handleAdd = () => {
        setcurrentValue(null);
        setisFormOpened(true);
    }

    const handleEdite = (value) => {
        setcurrentValue(value);
        setisFormOpened(true);
    }

    const handleValiderReparation = (id) => {
        deleteDemandeReparation(id).then(
            () => {
                toast.success("La voiture a été mentionné comme reparée");
                loadVehicule();
            }
        ).catch(
            () => {
                toast.error("Validation echouée");
            }
        )
    }

    return (
        <Stack
            gap={2}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
            >
                <Typography level="h4">Liste des vehicules de missions</Typography>
                <Button
                    endDecorator={
                        <Avatar
                            size='sm'
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Avatar>
                    }
                    size='sm'
                    onClick={() => handleAdd()}
                >Ajouter</Button>
            </Stack>

            <CustomTable
                headerList={['id', 'Matricule', "Date d'achat", "Type", "Marque", 'action']}
                data={data.map(value => [
                    value?.id_vehicule,
                    value?.matricule,
                    value?.date_achat,
                    value?.type,
                    value?.marque,
                    <ButtonGroup>
                        <Button
                            onClick={() => handleEdite(value)}
                            title='Modifier'
                            color='success'
                        >
                            <FontAwesomeIcon
                                icon={faFeatherAlt}
                            />
                        </Button>

                        <Button
                            onClick={() => handleDelete(value?.id_vehicule)}
                            color='danger'
                            title='supprimer'
                        >
                            <FontAwesomeIcon
                                icon={faTrashArrowUp}
                            />
                        </Button>
                        {
                            value.statut == 'en cours' && (
                                <Button
                                    endDecorator={
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    }
                                    sx={{
                                        textWrap: "nowrap"
                                    }}
                                    onClick={() => handleValiderReparation(value?.id_vehicule)}
                                >Valider reparation</Button>
                            )
                        }
                    </ButtonGroup>
                ])}
            />

            <EditionForm
                setisFormOpened={setisFormOpened}
                isFormOpened={isFormOpened}
                loadVehicule={loadVehicule}
                currentValue={currentValue}
            />
        </Stack>
    )
}

export default VoitureListe
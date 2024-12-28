import { faFeatherAlt, faPlus, faTrash, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import CustomTable from '../../components/CustomTable'
import { getAllUser } from '../../functions/getAllUser'
import EditionForm from './EditionForm'
import { deleteUser } from '../../functions/deleteUser'
import { toast } from 'react-toastify'
import { getAllRole } from '../../functions/getAllRole'

const VoitureListe = () => {
    const [data, setdata] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);
    const [currentValue, setcurrentValue] = useState(null);
    const [roleList, setroleList] = useState([]);

    const loadUser = useCallback(
        () => {
            getAllUser().then(res => res && setdata(res));
            setcurrentValue(null);
        },
        []
    );

    const loadRole = useCallback(
        () => {
            getAllRole().then(res => res && setroleList(res));
        },
        []
    );

    useEffect(
        () => {
            loadUser();
            loadRole();
        },
        []
    );

    const handleDelete = (id) => {
        if (
            window.confirm("Etes vous sur de vouloir supprimer?")
        ) {
            deleteUser(id).then(
                () => {
                    toast.success("Suppression reussit");
                    loadUser();
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

    return (
        <Stack
            gap={2}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
            >
                <Typography level="h4">Liste des voitures de missions</Typography>
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
                    value?.id_utilisateur,
                    value?.nom_utilisateur,
                    value?.prenom_utilisateur,
                    value?.login,
                    value?.nomRole,
                    value?.telephone,
                    <Stack
                        direction={"row"}
                        gap={1}
                        sx={{ cursor: "pointer" }}
                    >
                        <FontAwesomeIcon
                            icon={faFeatherAlt}
                            color='green'
                            onClick={() => handleEdite(value)}
                            title='Modifier'
                        />
                        <FontAwesomeIcon
                            icon={faTrashArrowUp}
                            color='red'
                            onClick={() => handleDelete(value?.id_utilisateur)}
                            title='supprimer'
                        />
                    </Stack>
                ])}
            />

            <EditionForm
                setisFormOpened={setisFormOpened}
                isFormOpened={isFormOpened}
                loadUser={loadUser}
                currentValue={currentValue}
                roleList={roleList}
            />
        </Stack>
    )
}

export default VoitureListe
import { faFeatherAlt, faPlus, faTrash, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import CustomTable from '../../components/CustomTable'
import { getAllUser } from '../../functions/getAllUser'
import EditionForm from './EditionForm'
import { deleteUser } from '../../functions/deleteUser'
import { toast } from 'react-toastify'

const UserListe = () => {
    const [data, setdata] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);
    const [currentValue, setcurrentValue] = useState(null);


    const loadUser = useCallback(
        () => {
            getAllUser().then(res => res && setdata(res))
        },
        []
    );

    useEffect(
        () => {
            loadUser()
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
                <Typography level="h4">Liste des utilisateurs</Typography>
                <Button
                    endDecorator={
                        <Avatar
                            size='sm'
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Avatar>
                    }
                    size='sm'
                    onClick={() => setisFormOpened(true)}
                >Ajouter</Button>
            </Stack>

            <CustomTable
                headerList={['id', 'Nom', "Prenom", "Login", "Role", "Telephone", 'action']}
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
            />
        </Stack>
    )
}

export default UserListe
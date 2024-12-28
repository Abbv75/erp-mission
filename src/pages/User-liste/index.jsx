import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import CustomTable from '../../components/CustomTable'
import { getAllUser } from '../../functions/getAllUser'
import EditionForm from './EditionForm'

const UserListe = () => {
    const [data, setdata] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);

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
    )

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
                headerList={['id', 'Nom', "Prenom", "Login", "Role", "Telephone"]}
                data={data.map(value => [
                    value?.id_utilisateur,
                    value?.nom_utilisateur,
                    value?.prenom_utilisateur,
                    value?.login,
                    value?.nomRole,
                    value?.telephone,
                ])}
            />

            <EditionForm
                setisFormOpened={setisFormOpened}
                isFormOpened={isFormOpened}
                loadUser={loadUser}
            />
        </Stack>
    )
}

export default UserListe
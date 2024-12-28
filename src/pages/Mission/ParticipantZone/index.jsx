import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getAllUser } from '../../../functions/getAllUser'

const ParticipantZone = () => {
    const [participantListe, setparticipantListe] = useState([]);

    const loadUser = useCallback(
        () => {
            getAllUser().then(res => res && setparticipantListe(res));
        },
        []
    );

    useEffect(
        () => {
            loadUser();
        },
        []
    );


    return (
        <Stack gap={2}>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
            >
                <Typography level="h4">Liste des missions</Typography>
                <Button
                    endDecorator={
                        <Avatar
                            size='sm'
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Avatar>
                    }
                    size='sm'
                // onClick={() => handleAdd()}
                >Ajouter</Button>
            </Stack>

            <Stack
                direction={"row"}
                gap={3}
                flexWrap={"wrap"}
            >
                {
                    participantListe.map(value => (
                        <UserCard 
                            data={value}
                        />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default ParticipantZone
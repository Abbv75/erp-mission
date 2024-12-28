import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getAllMissionParticipant } from '../../../functions/getAllMissionParticipant'
import { useParams } from 'react-router-dom'

const ParticipantZone = () => {
    const { id_mission } = useParams();
    const [participantListe, setparticipantListe] = useState([]);

    const loadParticipant = useCallback(
        () => {
            getAllMissionParticipant(id_mission).then(res => res && setparticipantListe(res));
        },
        []
    );

    useEffect(
        () => {
            loadParticipant();
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
                            loadParticipant={loadParticipant}
                            id_mission={id_mission}
                        />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default ParticipantZone
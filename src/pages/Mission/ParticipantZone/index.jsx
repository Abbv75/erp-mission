import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getAllMissionParticipant } from '../../../functions/getAllMissionParticipant'
import { useParams } from 'react-router-dom'
import AddUserForm from './AddUserForm'
import StatistiqueCard from '../../../components/StatistiqueCard'

const ParticipantZone = ({ id_mission }) => {
    const [participantListe, setparticipantListe] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);

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

    const handleAdd = () => {
        setisFormOpened(true);
    }


    return (
        <Stack gap={2}>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
            >
                <Typography level="h4">Liste des personnelles</Typography>
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

            <Stack
                gap={2}
                direction={"row"}
                flexWrap={"wrap"}
            >
                <StatistiqueCard
                    value={participantListe.length}
                    title={"Personnelles mobilisés"}
                />
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

            <AddUserForm
                isFormOpened={isFormOpened}
                setisFormOpened={setisFormOpened}
                id_mission={id_mission}
                loadParticipant={loadParticipant}
            />
        </Stack>
    )
}

export default ParticipantZone
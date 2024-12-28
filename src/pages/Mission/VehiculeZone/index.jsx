import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getAllMissionParticipant } from '../../../functions/getAllMissionParticipant'
import { useParams } from 'react-router-dom'
import AddUserForm from './AddUserForm'
import { getAllVehicule } from '../../../functions/getAllVehicule'

const VehiculeZone = ({ id_mission }) => {
    const [participantListe, setparticipantListe] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);

    const loadVehicule = useCallback(
        () => {
            getAllVehicule(id_mission).then(res => res && setparticipantListe(res));
        },
        []
    );

    useEffect(
        () => {
            loadVehicule();
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
                <Typography level="h4">Liste des vehicules de la mission</Typography>
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

export default VehiculeZone
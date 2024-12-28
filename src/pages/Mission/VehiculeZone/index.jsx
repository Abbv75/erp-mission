import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import { getAllMissionVehicule } from '../../../functions/getAllMissionVehicule'
import VoitureCard from '../../../components/VoitureCard'
import AddVehiculeForm from './AddVehiculeForm'

const VehiculeZone = ({ id_mission }) => {
    const [vehiculeListe, setvehiculeListe] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);

    const loadVehicule = useCallback(
        () => {
            getAllMissionVehicule(id_mission).then(res => res && setvehiculeListe(res));
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
                    vehiculeListe.map(value => (
                        <VoitureCard
                            data={value}
                            loadVehicule={loadVehicule}
                            id_mission={id_mission}
                        />
                    ))
                }
            </Stack>

            <AddVehiculeForm
                isFormOpened={isFormOpened}
                setisFormOpened={setisFormOpened}
                id_mission={id_mission}
                loadVehicule={loadVehicule}
            />
        </Stack>
    )
}

export default VehiculeZone
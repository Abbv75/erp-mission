import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import MissionItem from './MissionItem'
import { getAllMission } from '../../functions/getAllMission'
import EditionForm from './EditionForm'

const MissionListe = () => {
    const [data, setdata] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(false);
    const [currentValue, setcurrentValue] = useState(null);

    const loadMission = useCallback(
        () => {
            getAllMission().then(res => res && setdata(res));
        },
        []
    );

    useEffect(
        () => {
            loadMission();
        },
        []
    );

    const handleAdd = () => {
        setcurrentValue(null);
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
                    onClick={() => handleAdd()}
                >Ajouter</Button>
            </Stack>

            <Stack
                direction={"row"}
                gap={2}
            >
                {
                    data.map((value, index) => (
                        <MissionItem
                            key={index}
                            data={value}
                            loadMission={loadMission}
                        />
                    ))
                }
            </Stack>

            <EditionForm
                setisFormOpened={setisFormOpened}
                isFormOpened={isFormOpened}
                loadMission={loadMission}
                currentValue={currentValue}
            />
        </Stack>
    )
}

export default MissionListe
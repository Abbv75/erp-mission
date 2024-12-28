import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Stack, Typography } from '@mui/joy'
import React from 'react'
import MissionItem from './MissionItem'

const MissionListe = () => {
    const handleAdd = () => {
        // setcurrentValue(null);
        // setisFormOpened(true);
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
                    onClick={() => handleAdd()}
                >Ajouter</Button>
            </Stack>

            <Stack
                direction={"row"}
                gap={2}
            >
                <MissionItem/>
            </Stack>
        </Stack>
    )
}

export default MissionListe
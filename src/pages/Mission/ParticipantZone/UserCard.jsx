import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, Stack, Typography } from '@mui/joy'
import React from 'react'

const UserCard = () => {
    return (
        <Card
            sx={{
                p: 1
            }}
            color='primary'
        >
            <Avatar size='lg' variant='solid' sx={{ alignSelf: "center" }} />
            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700}>Nom et prenom :</Typography>
                <Typography>Moussa Diabate</Typography>
            </Stack>

            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700}>Role :</Typography>
                <Typography>Administrateur</Typography>
            </Stack>

            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700}>Contact :</Typography>
                <a href={'tel:6606305'}>66035300</a>
            </Stack>

            <Button endDecorator={<FontAwesomeIcon icon={faTimesCircle} />}>Supprimer de la liste</Button>
        </Card>
    )
}

export default UserCard
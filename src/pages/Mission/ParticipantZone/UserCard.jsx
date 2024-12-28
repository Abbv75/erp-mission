import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, Stack, Typography } from '@mui/joy'
import React from 'react'

const UserCard = ({ data }) => {
    return (
        <Card
            sx={{
                p: 1,
                minWidth: 250
            }}
            color='primary'
        >
            <Avatar size='lg' variant='solid' sx={{ alignSelf: "center" }} />
            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700} color='primary'>Nom et prenom :</Typography>
                <Typography>{data.nom_utilisateur} {data.prenom_utilisateur}</Typography>
            </Stack>

            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700} color='primary'>Role :</Typography>
                <Typography>{data.nomRole}</Typography>
            </Stack>

            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700} color='primary'>Contact :</Typography>
                <a href={'tel:6606305'}>66035300</a>
            </Stack>

            <Button endDecorator={<FontAwesomeIcon icon={faTimesCircle} />}>Supprimer de la liste</Button>
        </Card>
    )
}

export default UserCard
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, Stack, Typography } from '@mui/joy'
import React from 'react'
import { deleteMissionParticipant } from '../../../functions/deleteMissionParticipant'
import { toast } from 'react-toastify'

const UserCard = ({ data, loadParticipant, id_mission }) => {

    const handleDelete = () => {
        if (
            window.confirm("Etes vous sur de vouloir supprimer?")
        ) {
            deleteMissionParticipant(data.id_utilisateur, id_mission).then(
                () => {
                    toast.success("Suppression reussit");
                    loadParticipant && loadParticipant();
                }
            ).catch(
                () => {
                    toast.error("Suppression echouer");
                }
            )
        }
    }

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

            <Button
                endDecorator={
                    <FontAwesomeIcon icon={faTimesCircle} />
                }
                onClick={() => handleDelete()}
            >Supprimer de la liste</Button>
        </Card>
    )
}

export default UserCard
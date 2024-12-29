import { faTimesCircle, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, Stack, Typography } from '@mui/joy'
import React from 'react'
import { toast } from 'react-toastify'
import { deleteMissionVehicule } from '../../functions/deleteMissionVehicule'

const VoitureCard = ({ data, loadVehicule, id_mission, button }) => {

    const handleDelete = () => {
        if (
            window.confirm("Etes vous sur de vouloir supprimer?")
        ) {
            deleteMissionVehicule(data.id_vehicule, id_mission).then(
                () => {
                    toast.success("Suppression reussit");
                    loadVehicule && loadVehicule();
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
            <Avatar size='lg' variant='solid' sx={{ alignSelf: "center" }} >
                <FontAwesomeIcon icon={faTruck} />
            </Avatar>

            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700} color='primary'>Matricule :</Typography>
                <Typography>{data.matricule}</Typography>
            </Stack>

            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700} color='primary'>Marque :</Typography>
                <Typography>{data.marque}</Typography>
            </Stack>

            <Stack direction={"row"} gap={1}>
                <Typography fontWeight={700} color='primary'>Type :</Typography>
                <Typography>{data.type}</Typography>
            </Stack>

            {
                button || (
                    <Button
                        endDecorator={
                            <FontAwesomeIcon icon={faTimesCircle} />
                        }
                        onClick={() => handleDelete()}
                    >Supprimer de la liste</Button>
                )
            }

        </Card>
    )
}

export default VoitureCard
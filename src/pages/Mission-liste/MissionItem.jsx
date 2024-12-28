import { faFeatherAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, ButtonGroup, Card, Divider, Stack, Typography } from '@mui/joy'
import React from 'react'
import { toast } from 'react-toastify'
import { deleteMission } from '../../functions/deleteMission'

const MissionItem = ({ data, loadMission }) => {
    const handleDelete = (id) => {
        if (
            window.confirm("Etes vous sur de vouloir supprimer?")
        ) {
            deleteMission(id).then(
                () => {
                    toast.success("Suppression reussit");
                    loadMission && loadMission();
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
                cursor: "pointer"
            }}
            onClick={() => {

            }}
        >
            <Stack
                sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2
                }}
            >

                <Avatar variant='outlined' color='primary' sx={{ fontWeight: 700 }}>
                    {data.id_mission}
                </Avatar>

                <Stack
                    sx={{
                        "&>div": {
                            flexDirection: "row",
                            gap: 1
                        }
                    }}
                >
                    <Stack>
                        <Typography fontWeight={700} color='primary'>Date de depart:</Typography>
                        <Typography>{data.date_depart}</Typography>
                    </Stack>
                    <Divider />

                    <Stack>
                        <Typography fontWeight={700} color='primary'>Date d'arrivée:</Typography>
                        <Typography>{data.date_arrivee}</Typography>
                    </Stack>
                    <Divider />

                    <Stack>
                        <Typography fontWeight={700} color='primary'>Distance:</Typography>
                        <Typography>{data.kilometrage} KM</Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ButtonGroup variant='solid'>
                <Button
                    fullWidth
                    color='danger'
                    startDecorator={
                        <FontAwesomeIcon icon={faTrashArrowUp} />
                    }
                    onClick={() => handleDelete(data.id_mission)}
                >Supprimer</Button>
                <Button
                    fullWidth
                    color='primary'
                    endDecorator={
                        <FontAwesomeIcon icon={faFeatherAlt} />
                    }
                >Modifier</Button>
            </ButtonGroup>
        </Card>
    )
}

export default MissionItem
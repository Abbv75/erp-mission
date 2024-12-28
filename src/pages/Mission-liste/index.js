import { faFeatherAlt, faPlus, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, ButtonGroup, Card, Divider, Stack, Typography } from '@mui/joy'
import React from 'react'

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
                <Card
                    sx={{
                        p: 1
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
                            1
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
                                <Typography>5/845/4</Typography>
                            </Stack>
                            <Divider />

                            <Stack>
                                <Typography fontWeight={700} color='primary'>Date d'arrivée:</Typography>
                                <Typography>5/845/4</Typography>
                            </Stack>
                            <Divider />

                            <Stack>
                                <Typography fontWeight={700} color='primary'>Distance:</Typography>
                                <Typography>500 KM</Typography>
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
            </Stack>
        </Stack>
    )
}

export default MissionListe
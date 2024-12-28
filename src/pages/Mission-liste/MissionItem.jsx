import { faFeatherAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, ButtonGroup, Card, Divider, Stack, Typography } from '@mui/joy'
import React from 'react'

const MissionItem = () => {
    return (
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
    )
}

export default MissionItem
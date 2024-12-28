import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Stack, Typography } from '@mui/joy'
import { Collapse } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'

const InfoZone = () => {
    const [isOpen, setisOpen] = useState(true);

    return (
        <Stack direction={"row"} gap={2}>
            <Button
                variant='plain'
                sx={{ p: 0 }}
                onClick={() => setisOpen(!isOpen)}
            >
                <FontAwesomeIcon size='2x' icon={faInfoCircle} />
            </Button>

            <Collapse in={isOpen} orientation='horizontal' unmountOnExit>
                <Card
                    color='primary'
                    variant='soft'
                    sx={{
                        border: `2px solid ${blue[600]}`
                    }}
                >
                    <Typography color='primary' >
                        Cette se trouve à 500 KM de Bamako. Elle commence le 18-45-87441 et prendra fin le 551/521/1
                    </Typography>
                </Card>
            </Collapse>
        </Stack>
    )
}

export default InfoZone
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Stack, Typography } from '@mui/joy'
import { Collapse } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useCallback, useEffect, useState } from 'react'
import { getMission } from '../../functions/getMission'

const InfoZone = ({ id_mission }) => {
    const [isOpen, setisOpen] = useState(true);
    const [missionData, setmissionData] = useState({});

    const loadMission = useCallback(
        () => {
            getMission(id_mission).then(res => res && setmissionData(res));
        },
        []
    );

    useEffect(
        () => {
            loadMission();
        },
        []
    );

    return (
        <Stack direction={"row"} gap={2}>
            <Button
                variant='plain'
                sx={{ p: 0 }}
                onClick={() => setisOpen(!isOpen)}
            >
                <FontAwesomeIcon size='2x' icon={faInfoCircle} />
            </Button>

            <Collapse in={isOpen && !!missionData} orientation='horizontal' unmountOnExit>
                <Card
                    color='primary'
                    variant='soft'
                    sx={{
                        border: `2px solid ${blue[600]}`
                    }}
                >
                    <Typography color='primary' >
                        Cette se trouve à {missionData?.kilometrage?.toLocaleString()} KM de Bamako. Elle commence le {missionData?.date_depart} et prendra fin le {missionData?.date_arrivee}
                    </Typography>
                </Card>
            </Collapse>
        </Stack>
    )
}

export default InfoZone
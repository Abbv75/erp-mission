import { Stack } from '@mui/joy'
import React from 'react'
import InfoZone from './InfoZone'
import ParticipantZone from './ParticipantZone'
import { useParams } from 'react-router-dom'
import VehiculeZone from './VehiculeZone'

const Mission = () => {
    const { id_mission } = useParams();

    return (
        <Stack
            gap={2}
        >
            <InfoZone
                id_mission={id_mission}
            />

            <ParticipantZone
                id_mission={id_mission}
            />

            <VehiculeZone />
        </Stack>
    )
}

export default Mission
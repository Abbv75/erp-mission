import { Stack } from '@mui/joy'
import React from 'react'
import InfoZone from './InfoZone'
import ParticipantZone from './ParticipantZone'

const Mission = () => {
    return (
        <Stack
            gap={2}
        >
            <InfoZone />

            <ParticipantZone />
        </Stack>
    )
}

export default Mission
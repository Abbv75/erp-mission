import { faHashtag, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Card, CardContent, CardCover, Stack, Typography } from '@mui/joy'
import { blue, green, purple, red } from '@mui/material/colors'
import React from 'react'

const StatistiqueCard = ({ value, title, icon = faHashtag }) => {
    return (
        <Card
            sx={{
                width: 270,
                border: `2px solid ${blue[700]}`,
                borderRadius: 20,
                gap: 1,
            }}
        >
            <CardContent
                sx={{
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <Avatar
                    size='lg'
                    sx={{
                        width: 90,
                        height: 90,
                    }}
                >
                    <FontAwesomeIcon size='2x' icon={icon} />
                </Avatar>

                <Stack>
                    <Typography level='h1'>{value}</Typography>
                    <Typography>{title}</Typography>
                </Stack>
            </CardContent>
            <CardCover sx={{
                background: `linear-gradient(45deg, ${purple[100]}, ${blue[500]})`
            }} />
        </Card>
    )
}

export default StatistiqueCard
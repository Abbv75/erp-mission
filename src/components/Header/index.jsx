import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, Stack, Typography } from '@mui/joy'
import { CardMedia } from '@mui/material'
import React from 'react'

const Header = ({ setisNavbarOpened }) => {
    return (
        <Card
            sx={{
                p: 1,
                borderRadius: 0
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Button
                    startDecorator={
                        <FontAwesomeIcon icon={faBars} />
                    }
                    onClick={() => setisNavbarOpened && setisNavbarOpened(true)}
                >Menu</Button>
                <Stack direction="row" gap={1} sx={{ p: 1 }} alignItems={"center"}>
                    <CardMedia
                        component={"img"}
                        src={require("../../assets/logo.png")}
                        sx={{
                            width: 50
                        }}
                    />
                    <Typography color='primary' level='h3'>Groupe Sahel</Typography>
                </Stack>
            </Stack>
        </Card>
    )
}

export default Header
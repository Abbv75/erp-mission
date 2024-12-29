import { faBars, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Stack, Typography } from '@mui/joy'
import { CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ setisNavbarOpened }) => {
    const handleDeconnexion = () => {
        localStorage.removeItem("currentUser");
        window.location.href = "/"
    }

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
                <Link to={"/"}>
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
                </Link>

                <Button
                    color='danger'
                    variant='outlined'
                    endDecorator={
                        <FontAwesomeIcon icon={faUserLock} />
                    }
                    onClick={() => handleDeconnexion()}
                >
                    Deconnexion
                </Button>
            </Stack>
        </Card>
    )
}

export default Header
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCarAlt, faTimes, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Drawer, Typography } from '@mui/joy'
import React from 'react'

const Navbar = ({
    isNavbarOpened = true,
    setisNavbarOpened
}) => {
    return (
        <Drawer
            onClose={() => setisNavbarOpened && setisNavbarOpened(false)}
            open={isNavbarOpened}
            slotProps={{
                content: {
                    sx: {
                        padding: 2,
                        gap: 1
                    }
                }
            }}
        >
            <Button
                endDecorator={
                    <FontAwesomeIcon icon={faTimes} />
                }
                sx={{
                    alignSelf: "flex-end"
                }}
                onClick={() => setisNavbarOpened(false)}
            >
                Fermer
            </Button>
            <Button
                variant='soft'
                startDecorator={
                    <Avatar variant='solid'>
                        <FontAwesomeIcon icon={faUserAstronaut} />
                    </Avatar>
                }
                size='lg'
            >
                <Typography textAlign={"left"} width={"100%"}>Gestion des utilisateurs</Typography>
            </Button>
            <Button
                variant='soft'
                startDecorator={
                    <Avatar variant='solid'>
                        <FontAwesomeIcon icon={faCarAlt} />
                    </Avatar>
                }
                size='lg'
            >
                <Typography width={"100%"} textAlign={"left"}>Gestion des voitures de mission</Typography>
            </Button>
            <Button
                variant='soft'
                startDecorator={
                    <Avatar variant='solid'>
                        <FontAwesomeIcon icon={faStackOverflow} />
                    </Avatar>
                }
                size='lg'
            >
                <Typography width={"100%"} textAlign={"left"}>Gestion des missions</Typography>
            </Button>
        </Drawer>
    )
}

export default Navbar
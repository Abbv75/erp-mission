import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCarAlt, faTimes, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Drawer, Typography } from '@mui/joy'
import React, { useState } from 'react'

const Navbar = ({
    isNavbarOpened = true,
    setisNavbarOpened
}) => {
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser"))
    );

    // alert(currentUser)

    return (
        <Drawer
            onClose={() => setisNavbarOpened && setisNavbarOpened(false)}
            open={isNavbarOpened}
            slotProps={{
                content: {
                    sx: {
                        padding: 2,
                        gap: 1,
                        height: "100%"
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
            {
                currentUser?.nomRole == 'administrateur' && (
                    <Button
                        variant='soft'
                        startDecorator={
                            <Avatar variant='solid'>
                                <FontAwesomeIcon icon={faUserAstronaut} />
                            </Avatar>
                        }
                        size='lg'
                        component={"a"}
                        href='/user-liste'
                    >
                        <Typography textAlign={"left"} width={"100%"}>Gestion des utilisateurs</Typography>
                    </Button>
                )
            }

            {
                currentUser?.nomRole == 'gestionnaire' && (
                    <>
                        <Button
                            variant='soft'
                            startDecorator={
                                <Avatar variant='solid'>
                                    <FontAwesomeIcon icon={faCarAlt} />
                                </Avatar>
                            }
                            size='lg'
                            component={"a"}
                            href='/voiture-liste'
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
                            component={"a"}
                            href='/mission-liste'
                        >
                            <Typography width={"100%"} textAlign={"left"}>Gestion des missions</Typography>
                        </Button>
                    </>
                )
            }

            {
                currentUser?.nomRole == 'chauffeur' && (
                    <Button
                        variant='soft'
                        startDecorator={
                            <Avatar variant='solid'>
                                <FontAwesomeIcon icon={faUserAstronaut} />
                            </Avatar>
                        }
                        size='lg'
                        component={"a"}
                        href='/demande-reparation'
                    >
                        <Typography textAlign={"left"} width={"100%"}>Demande de reparation</Typography>
                    </Button>
                )
            }
        </Drawer>
    )
}

export default Navbar
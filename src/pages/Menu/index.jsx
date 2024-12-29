import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGears, faTruck } from '@fortawesome/free-solid-svg-icons'
import { Stack } from '@mui/joy'
import React, { useState } from 'react'
import PageCard from './PageCard'

const Menu = () => {
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser"))
    );

    return (
        <Stack
            direction={"row"}
            flexWrap={"wrap"}
            height={500}
            alignItems={"center"}
            justifyContent={'center'}
            gap={4}
            sx={{
                "& a": {
                    textDecoration: "none",
                }
            }}
        >
            {
                currentUser?.nomRole == 'administrateur' && (
                    <PageCard
                        title={"Gestion des utilisateurs"}
                        href={"/user-liste"}
                    />
                )
            }

            {
                currentUser?.nomRole == 'gestionnaire' && (
                    <>
                        <PageCard
                            title={"Gestion des véhicules"}
                            href={"/voiture-liste"}
                            icon={faTruck}
                        />

                        <PageCard
                            title={"Gestion des missions"}
                            href={"/mission-liste"}
                            icon={faStackOverflow}
                        />
                    </>
                )
            }

            {
                currentUser?.nomRole == 'chauffeur' && (
                    <PageCard
                        title={"Demande de réparation"}
                        href={"/demande-reparation"}
                        icon={faGears}
                    />
                )
            }

        </Stack>
    )
}

export default Menu
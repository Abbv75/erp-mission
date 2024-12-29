import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Connexion from '../../pages/Connexion'
import UserListe from '../../pages/User-liste'
import VoitureListe from '../../pages/voiture-liste'
import MissionListe from '../../pages/Mission-liste'
import Mission from '../../pages/Mission'
import DemandeReparation from '../../pages/DemandeReparation'
import Menu from '../../pages/Menu'

const Router = () => {
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser"))
    );

    return (
        <Routes>
            {/* <Route
                path='/*'
                element={
                    !!currentUser
                        ? (
                            currentUser.nomRole == 'administrateur'
                                ? <UserListe />
                                : currentUser.nomRole == 'chauffeur'
                                    ? <DemandeReparation />
                                    : <MissionListe />
                        )
                        : <Connexion setcurrentUser={setcurrentUser} />
                }
            /> */}

            <Route path='/*' element={<Menu />} />

            {
                !!currentUser && (
                    <>
                        <Route path='/login' element={<Connexion />} />
                        <Route path='/user-liste/*' element={<UserListe />} />
                        <Route path='/voiture-liste/*' element={<VoitureListe />} />
                        <Route path='/mission-liste/*' element={<MissionListe />} />
                        <Route path='/mission/:id_mission' element={<Mission />} />
                        <Route path='/mission/*' element={<MissionListe />} />
                        <Route path='/demande-reparation/*' element={<DemandeReparation />} />
                    </>
                )
            }

        </Routes>
    )
}

export default Router
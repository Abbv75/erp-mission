import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Connexion from '../../pages/Connexion'
import UserListe from '../../pages/User-liste'
import VoitureListe from '../../pages/voiture-liste'
import MissionListe from '../../pages/Mission-liste'
import Mission from '../../pages/Mission'

const Router = () => {
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser"))
    );

    return (
        <Routes>
            <Route
                path='/*'
                element={
                    !!localStorage.getItem("currentItem")
                        ? <UserListe />
                        : <Connexion setcurrentUser={setcurrentUser} />
                }
            />

            {
                !!currentUser && (
                    <>
                        <Route path='/login' element={<Connexion />} />
                        <Route path='/user-liste/*' element={<UserListe />} />
                        <Route path='/voiture-liste/*' element={<VoitureListe />} />
                        <Route path='/mission-liste/*' element={<MissionListe />} />
                        <Route path='/mission/:id_mission' element={<Mission />} />
                        <Route path='/mission/*' element={<MissionListe />} />
                    </>
                )
            }

        </Routes>
    )
}

export default Router
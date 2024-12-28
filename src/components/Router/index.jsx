import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Connexion from '../../pages/Connexion'
import UserListe from '../../pages/User-liste'
import VoitureListe from '../../pages/voiture-liste'
import MissionListe from '../../pages/Mission-liste'

const Router = () => {
    return (
        <Routes>
            <Route
                path='/*'
                element={
                    !!localStorage.getItem("currentItem")
                        ? <UserListe />
                        : <Connexion />
                }
            />

            <Route path='/login' element={<Connexion />} />
            <Route path='/user-liste/*' element={<UserListe />} />
            <Route path='/voiture-liste/*' element={<VoitureListe />} />
            <Route path='/mission-liste/*' element={<MissionListe />} />
        </Routes>
    )
}

export default Router
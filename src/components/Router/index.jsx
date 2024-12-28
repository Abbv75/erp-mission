import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Connexion from '../../pages/Connexion'
import UserListe from '../../pages/User-liste'
import VoitureListe from '../../pages/voiture-liste'

const Router = () => {
    return (
        <Routes>
            <Route path='/*' element={!!localStorage.getItem("currentItem") ? <UserListe /> : <Connexion />} />

            <Route path='/login' element={<Connexion />} />
            <Route path='/user-liste/*' element={<UserListe />} />
            <Route path='/voiture-liste/*' element={<VoitureListe />} />
        </Routes>
    )
}

export default Router
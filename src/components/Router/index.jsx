import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Connexion from '../../pages/Connexion'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Connexion />} />
            <Route path='/login' element={<Connexion />} />
        </Routes>
    )
}

export default Router
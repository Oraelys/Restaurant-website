import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import ReservationForm from './pages/ReservationForm'

function app() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<ReservationForm />} />
    </Routes>
  )
}

export default app
import './App.css'
import { useNavigate, Route, Routes } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import Inicio from './pages/Inicio'
import Dbase from './pages/Dbase'
import Credits from './pages/Credits'
import Error404 from './pages/Error404'
import NavbarW from './components/NavbarW'
import Smssg from './pages/Smssg'
import Mssg from './pages/Mssg'

function App () {
  const navigate = useNavigate()
  return (
    <NextUIProvider navigate={navigate}>
      <NavbarW />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Database' element={<Dbase />} />
        <Route path='/Creditos' element={<Credits />} />
        <Route path='/EnviarMensaje' element={<Smssg />} />
        <Route path='/Mensajes' element={<Mssg />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </NextUIProvider>
  )
}

export default App

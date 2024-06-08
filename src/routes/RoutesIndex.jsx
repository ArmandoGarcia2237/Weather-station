import { Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Dbase from '../pages/Dbase'
import Credits from '../pages/Credits'
import Error404 from '../pages/Error404'

const RoutesIndex = () => {
  return (
    <div className='bg-dark text-white text-center'>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Database' element={<Dbase />} />
        <Route path='/Creditos' element={<Credits />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default RoutesIndex

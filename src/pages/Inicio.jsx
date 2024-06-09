import CardW from '../components/CardW'
import Proyect from '../components/Proyect'
import Grafic from '../components/Grafic'
import Database from '../components/Database'
import LastL from '../components/LastL'

import UseWeather from '../Hook/UseWeather'

const Inicio = () => {
  const { ultimo } = UseWeather()

  return (
    <>
      <div className='justify-center shadow-2xl m-5 p-5 bg-sky-100 text-black'>
        <h1 className='text-7xl mt-5 mb-1'>Monitor ambiental</h1>
        <span className='m-0 p-0 text-xl font-light'>En tiempo real</span>
        <br />
        <div className='flex flex-row justify-center items-center'>
          <CardW tm={ultimo[2]} hm={ultimo[0]} pr={ultimo[1]} />
        </div>
        <div className='text-xl pt-1 mt-1'>ultima lectura</div>
        <LastL date={ultimo[3]} />
        <Proyect />
        <Grafic />
        <div className='m-3 p-3 justify-center'>
          <Database />
        </div>
      </div>
      <div className='text-black font-light font-italic pb-1 pt-9 mb-1 mt-9 shadow- xl'>
        Relizado por Armando García Sarao
      </div>
    </>
  )
}

export default Inicio

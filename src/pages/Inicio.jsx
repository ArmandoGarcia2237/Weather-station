import CardW from '../components/CardW'
import Proyect from '../components/Proyect'
import Grafic from '../components/Grafic'
import Database from '../components/Database'

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
          <CardW tm={ultimo[4]} hm={ultimo[2]} pr={ultimo[3]} />
        </div>
        <div className='text-xl pt-1 mt-1'>ultima lectura</div>
        <div className='font-light text-xl pt-0 mt-0 pb-5 mb-5'><a className='font-sans font-bold'>fecha:</a> {ultimo[0]} <a className='font-sans font-bold'>  Hora:</a> {ultimo[1]}</div>
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

import './App.css'
import CardW from './components/CardW'
import Proyect from './components/Proyect'
import Grafic from './components/Grafic'
import { Accordion, AccordionItem, Avatar } from '@nextui-org/react'

import UseWeather from './Hook/UseWeather'

function App () {
  const { ultimo, tiempo } = UseWeather()

  return (
    <>
      <div className='justify-center shadow-2xl m-5 p-5 bg-sky-100 '>
        <h1 className='text-7xl mt-5 mb-1'>Monitor ambiental</h1>
        <span className='m-0 p-0 text-xl font-light'>En tiempo real</span>
        <br />
        <div className='flex flex-row justify-center items-center'>
          <CardW tm={ultimo[4]} hm={ultimo[2]} pr={ultimo[3]} />
        </div>
        <div className='text-xl pt-1 mt-1'>ultima lectura</div>
        <div className='font-light text-xl pt-0 mt-0 pb-5 mb-5'>fecha: {ultimo[0]} hora: {ultimo[1]}</div>
        <Proyect />
        <Grafic />
        <Accordion variant='splitted'>
          <AccordionItem
            key='1' aria-label='Accordion 1' title='Datos recopilados' className='text-light' startContent={
              <Avatar
                isBordered
                color='primary'
                radius='blue'
                src='https://cdn-icons-png.freepik.com/512/9850/9850812.png'
              />
        }
          >
            <ul className=''>
              {tiempo?.map((item, index) => (
                <li className='font-sans font-light text-black text-xl flex items-center justify-center' key={index}>
                  <div className='p-3 '>Fecha : <a className='font-sans font-bold'>{item.fecha}</a></div>
                  <div className='p-3 '>Hora : <a className='font-sans font-bold'>{item.hora} hrs</a></div>
                  <div className='p-3 '>temperatura : <a className='font-sans font-bold'>{item.temperatura}°</a></div>
                  <div className='p-3 '>humedad : <a className='font-sans font-bold'>{item.humedad}%</a></div>
                  <div className='p-3 '>presión : <a className='font-sans font-bold'>{item.presión}hpa</a></div>
                </li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='font-light font-italic pb-1 pt-9 mb-1 mt-9 shadow-xl'>
        Relizado por Armando García Sarao
      </div>
    </>
  )
}

export default App

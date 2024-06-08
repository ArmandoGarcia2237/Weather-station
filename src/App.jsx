import './App.css'
import CardW from './components/CardW'
import Proyect from './components/Proyect'
import { Accordion, AccordionItem, Avatar } from '@nextui-org/react'

import UseWeather from './Hook/UseWeather'

function App () {
  const { ultimo, tiempo } = UseWeather()

  return (
    <>
      <div className='justify-center shadow-2xl m-5 p-5 bg-slate-200'>
        <h1 className='text-7xl m-5'>Estación Meteorlógica</h1>
        <div className='flex flex-row justify-center items-center'>
          <CardW tm={ultimo[2]} hm={ultimo[0]} pr={ultimo[1]} />
        </div>
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
              {tiempo.map((item, index) => (
                <li className='font-sans font-light text-black text-xl flex items-center justify-center' key={index}>
                  <div className='p-3 '>temperatura : <a className='font-sans font-bold'>{item.temperatura}°</a></div>
                  <div className='p-3 '>humedad : <a className='font-sans font-bold'>{item.humedad}%</a></div>
                  <div className='p-3 '>presión : <a className='font-sans font-bold'>{item.presión}hpa</a></div>
                </li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
        <Proyect />
      </div>
      <div className='font-light font-italic pb-1 pt-9 mb-1 mt-9'>
        Relizado por Armando García Sarao
      </div>
    </>
  )
}

export default App

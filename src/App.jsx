import './App.css'
import CardW from './components/CardW'
import { Accordion, AccordionItem } from '@nextui-org/react'
import UseWeather from './Hook/UseWeather'

function App () {
  const { ultimo, tiempo } = UseWeather()

  return (
    <div className=''>
      <h1 className='text-7xl m-5'>Estación Meteorlógica</h1>
      <div className='flex flex-row justify-center items-center'>
        <CardW tm={ultimo[2]} hm={ultimo[0]} pr={ultimo[1]} />
      </div>
      <Accordion className='bg-slate-200 text-2xl'>
        <AccordionItem key='1' aria-label='Accordion 1' title='Datos recopilados' className=''>
          <ul className=''>
            {tiempo.map((item, index) => (
              <li className='font-sans font-light text-black text-xl flex items-center justify-center' key={index}>
                <div className='p-3 bg-amber-200'>temperatura : {item.temperatura}</div>
                <div className='p-3 bg-sky-200'>humedad : {item.humedad}</div>
                <div className='p-3 bg-green-200'>presión : {item.presión}</div>
                <br />
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App

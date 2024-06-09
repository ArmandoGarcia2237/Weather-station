import UseWeather from '../Hook/UseWeather'
import { Accordion, AccordionItem, Avatar } from '@nextui-org/react'

const Database = () => {
  const { tiempo } = UseWeather()

  const Ntiempo = tiempo.slice(tiempo.length - 20)

  return (
    <Accordion variant='splitted'>
      <AccordionItem
        key='1' aria-label='Accordion 1' title='Datos recopilados' subtitle=' ultimos 20 datos ' className='text-light' startContent={
          <Avatar
            isBordered
            color='primary'
            radius='blue'
            src='https://cdn-icons-png.freepik.com/512/9850/9850812.png'
          />
  }
      >
        <ul className=''>
          {Ntiempo?.map((item, index) => (
            <li className='font-sans font-light text-black text-xl flex items-center justify-center' key={index}>
              <div className='p-3 '>Fecha : <a className='font-sans font-bold'>{item.timestamp.slice(0, 10)}</a></div>
              <div className='p-3 '>Hora : <a className='font-sans font-bold'>{item.timestamp.slice(11, 19)} hrs</a></div>
              <div className='p-3 '>temperatura : <a className='font-sans font-bold'>{item.temperatura}°c</a></div>
              <div className='p-3 '>humedad : <a className='font-sans font-bold'>{item.humedad}%</a></div>
              <div className='p-3 '>presión : <a className='font-sans font-bold'>{item.presión}hpa</a></div>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
  )
}

export default Database

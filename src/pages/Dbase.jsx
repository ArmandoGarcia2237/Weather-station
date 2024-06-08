import React from 'react'
import UseWeather from '../Hook/UseWeather'
import Tabla from '../components/Tabla'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const Dbase = () => {
  const { tiempo } = UseWeather()
  return (
    <div className=''>
      <div className='text-5xl font-light mt-5 pt-5'>
        BASE DE DATOS
      </div>
      <div className='text-sm pb-5 mb-5'>todos los datos recolectados</div>
      {tiempo?.map((item, index) => (
        <>
          <Tabla index={index} d1={item.fecha} d2={item.hora} d3={item.temperatura} d4={item.humedad} d5={item.presión} />
        </>
      ))}
    </div>
  )
}

export default Dbase

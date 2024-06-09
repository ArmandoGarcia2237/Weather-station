import React from 'react'
import UseWeather from '../Hook/UseWeather'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const Dbase = () => {
  const { tiempo } = UseWeather()
  return (
    <div className=''>
      <div className='text-6xl font-light mt-5 pt-5'>
        BASE DE DATOS
      </div>
      <div className='text-md pb-5 mb-5'>todos los datos recolectados</div>
      <div> Cantidad de lecturas: {tiempo.length}</div>
      <Table isStriped aria-label='Example static collection table' className='justify-center text-center'>
        <TableHeader>
          <TableColumn><p className='text-center text-black'>FECHA</p></TableColumn>
          <TableColumn><p className='text-center text-black'>HORA</p></TableColumn>
          <TableColumn><p className='text-center text-black'>TEMPERATURA</p></TableColumn>
          <TableColumn><p className='text-center text-black'>HUMEDAD</p></TableColumn>
          <TableColumn><p className='text-center text-black'>PRESIÓN</p></TableColumn>
        </TableHeader>
        <TableBody>
          {tiempo?.map((item, index) => (
            <TableRow key={index}>
              <TableCell key={index}>{item.timestamp.slice(0, 10)}</TableCell>
              <TableCell key={index}>{item.timestamp.slice(11, 19)} hrs</TableCell>
              <TableCell key={index}>{item.temperatura}°c</TableCell>
              <TableCell key={index}>{item.humedad}%</TableCell>
              <TableCell key={index}>{item.presión} hpa</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dbase

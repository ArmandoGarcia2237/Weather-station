import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const Tabla = ({ d1, d2, d3, d4, d5, index }) => {
  return (
    <Table aria-label='Example static collection table' className='justify-center text-center'>
      <TableHeader>
        <TableColumn><p className='text-center text-black'>FECHA</p></TableColumn>
        <TableColumn><p className='text-center text-black'>HORA</p></TableColumn>
        <TableColumn><p className='text-center text-black'>TEMPERATURA</p></TableColumn>
        <TableColumn><p className='text-center text-black'>HUMEDAD</p></TableColumn>
        <TableColumn><p className='text-center text-black'>PRESIÓN</p></TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key={index}>
          <TableCell>{d1}</TableCell>
          <TableCell>{d2}</TableCell>
          <TableCell>{d3}</TableCell>
          <TableCell>{d4}</TableCell>
          <TableCell>{d5}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default Tabla

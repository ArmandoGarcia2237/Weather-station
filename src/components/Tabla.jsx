import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const Tabla = ({ data, index }) => {
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
        {data.map((index, item) =>
          <TableRow key={index}>
            <TableCell>{item}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default Tabla

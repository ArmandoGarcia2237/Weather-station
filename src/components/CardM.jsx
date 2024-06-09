import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react'

const CardM = ({ username, mensaje, key }) => {
  return (
    <div>
      <Card className='max-w-[700px] bg-slate-100 m-5 p-5 content-center'>
        <CardHeader className='flex gap-3 content-center'>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
            width={40}
          />
          <div className='flex flex-col'>
            <p className='text-md font-light text-3xl text-center'>{username}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{mensaje}</p>
        </CardBody>
        <Divider />
        <CardFooter className='content-center text-center'>
          <Link
            href='/EnviarMensaje'
          >
            Enviar un mensaje
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardM

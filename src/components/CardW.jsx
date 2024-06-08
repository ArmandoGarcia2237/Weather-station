import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'

const CardW = ({ id, tm, hm, pr }) => {
  return (
    <div className='flex flex-row'>
      <Card className='py-4 max-w-[500px] p-5 m-5 bg-amber-400 shadow-2xl'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <h4 className='text-center text-4xl font-sans font-extralight'>temperatura: {tm}</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2 items-center'>
          <Image
            isBlurred
            width={240}
            src='https://static.thenounproject.com/png/1979336-200.png'
            alt='NextUI Album Cover'
            className='rounded-xl'
          />
        </CardBody>
      </Card>
      <Card className='py-4 max-w-[500px] p-5 m-5 bg-cyan-500 shadow-2xl'>
        <CardHeader className='items-center justify-center'>
          <h4 className='text-center text-4xl font-sans font-extralight'>humedad: {hm}</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2 items-center'>
          <Image
            isBlurred
            width={240}
            src='https://cdn-icons-png.flaticon.com/512/219/219816.png'
            alt='NextUI Album Cover'
            className='rounded-xl'
          />
        </CardBody>
      </Card>
      <Card className='py-4 max-w-[500px] p-5 m-5 bg-green-500 shadow-2xl'>
        <CardHeader className='pb-0 pt-2 px-6 flex-col items-start'>
          <h4 className='text-center text-4xl font-sans font-extralight'>presión: {pr}</h4>
        </CardHeader>
        <CardBody className='overflow-visible items-center'>
          <Image
            isBlurred
            width={240}
            src='https://static.thenounproject.com/png/1841-200.png'
            alt='NextUI Album Cover'
            className='rounded-xl'
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default CardW

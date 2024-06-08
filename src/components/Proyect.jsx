const Proyect = () => {
  return (
    <div className='text-center m-6 p-6'>
      <div className='font-light'>
        Datos obteninos mediante el uso del sensor BME280 contectado a una raspberry pi 4 model b el cual mediante un código python se realiza la lectura de temperatura, humedad y presión atmosferica, así mismo dentro del código se hace la conexión a la base de datos y el respectivo envio de los mismos, los datos recolectados son enviados a firebase de google y leidos desde react vite
      </div>
    </div>
  )
}

export default Proyect

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend } from 'recharts'
import UseWeather from '../Hook/UseWeather'

const Grafic = () => {
  const { tiempo } = UseWeather()

  const Ntiempo = tiempo.slice(tiempo.length - 20)
  return (
    <>
      <div className='text-5xl font-light mt-1 pt-1'>Graficado en tiempo real</div>
      <div className='mb-4 pb-4 font-light'>ultimos 20 datos</div>
      <div>Grafica Temperatura(°c)</div>
      <ResponsiveContainer widht='50%' height='50%' aspect={4}>
        <AreaChart
          widht={200}
          height={100}
          data={Ntiempo}
          margin={
                {
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 0
                }
}
        >
          <CartesianGrid strokeDasharray='5 5' />
          <XAxis dataKey='timestamp' stroke='black' tickFormatter={(label) => `${label.slice(11, 19)}hrs`} />
          <YAxis />
          <Tooltip content={<CustomTooltip1 />} />
          <Legend />
          <CartesianGrid />
          <Area type='monotone' dataKey='temperatura' stroke='#faa009' fill='#faa009' stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
      <br />
      <br />
      <div>Grafica Humedad(%)</div>
      <ResponsiveContainer widht='50%' height='50%' aspect={4}>
        <AreaChart
          widht={200}
          height={100}
          data={Ntiempo}
          margin={
                {
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 0
                }
}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='timestamp' stroke='black' tickFormatter={(label) => `${label.slice(11, 19)}hrs`} />
          <YAxis />
          <Tooltip content={<CustomTooltip2 />} />
          <Legend />
          <CartesianGrid />
          <Area type='monotone' dataKey='humedad' stroke='#34aac1' fill='#34aac1' stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
      <br />
      <br />
      <div>Grafica Presion(hpa)</div>
      <ResponsiveContainer widht='50%' height='50%' aspect={4}>
        <AreaChart
          widht={200}
          height={100}
          data={Ntiempo}
          margin={
                {
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 0
                }
}
        >
          <CartesianGrid strokeDasharray='4 4' />
          <XAxis dataKey='timestamp' stroke='black' tickFormatter={(label) => `${label.slice(11, 19)}hrs`} />
          <YAxis />
          <Tooltip content={<CustomTooltip3 />} />
          <Legend />
          <CartesianGrid />
          <Area type='monotone' dataKey='presión' stroke='#007D06' fill='#007D06' stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

const CustomTooltip1 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
        <p className='text-sm text-amber-600'>
          <p className='font-light'>hora: {label.slice(11, 19)} hrs</p>
          temperatura:
          <span className='ml-2'>{payload[0].value}°c</span>
        </p>
      </div>
    )
  }
}

const CustomTooltip2 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
        <p className='text-sm text-teal-500'>
          <p className='font-light'>hora: {label.slice(11, 19)} hrs</p>
          humedad:
          <span className='ml-2'>{payload[0].value}%</span>
        </p>
      </div>
    )
  }
}

const CustomTooltip3 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
        <p className='text-sm text-lime-600'>
          <p className='font-light'>hora: {label.slice(11, 19)} hrs</p>
          Presión:
          <span className='ml-2'>{payload[0].value} hpa</span>
        </p>
      </div>
    )
  }
}

export default Grafic

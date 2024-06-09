import React from 'react'

const LastL = ({ date }) => {
  return (
    <div>
      <div className='font-light text-xl pt-0 mt-0 pb-5 mb-5'><a className='font-sans font-bold'>fecha:</a> {date?.slice(0, 10)} <a className='font-sans font-bold'>  Hora:</a> {date?.slice(11, 19)}</div>
    </div>
  )
}

export default LastL

import React, { useState, useEffect } from 'react'
import { getDatabase, ref, get } from 'firebase/database'
import CardM from '../components/CardM'
import app from '../firebase-config'

const Mssg = () => {
  const [msj, setMsj] = useState([])

  const fetchMessage = async () => {
    const db = getDatabase(app)
    const dbRef = ref(db, 'messages')
    const snapshot = await get(dbRef)
    if (snapshot.exists()) {
      setMsj(Object.values(snapshot.val()))
    } else {
      console.log('no data')
    }
  }

  useEffect(() => {
    fetchMessage()
  })

  return (
    <>
      <div className='text-6xl font-light font-sans'>Mensajes</div>
      <div className='grid grid-cols-3 gap-4 content-center'>
        {msj?.map((item, index) => (
          <CardM key={index} username={item.username} mensaje={item.mensaje} />
        ))}
      </div>
    </>
  )
}

export default Mssg

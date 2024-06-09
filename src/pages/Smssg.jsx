import React, { useState, useEffect } from 'react'
import { Input, Button } from '@nextui-org/react'
import { getDatabase, ref, set, get } from 'firebase/database'
import app from '../firebase-config'

const Smssg = () => {
  const [message, setMessage] = useState('')
  const [user, Setuser] = useState('')
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

  function writeUserMessage () {
    if (Object.keys(user).length === 0 || Object.keys(message).length === 0) {
      console.log('user y mensaje estan vacios')
      alert('ingrese un nombre y su mensaje, porfavor')
    } else {
      const db = getDatabase()
      set(ref(db, 'messages/' + msj.length), {
        username: user,
        mensaje: message
      })
      setMessage('')
      Setuser('')
    }
  }
  useEffect(() => {
    fetchMessage()
  })
  return (

    <>
      <div className='text-6xl font-light font-sans'>Envía un mensaje</div>
      <div className='font/light'>escribenos un comentario</div>
      <div className='flex w-full flex-wrap md:flex-nowrap gap-4 mt-5 pt-5'>
        <Input
          label='Nombre'
          placeholder='ingresa tu nombre'
          value={user} onChange={(e) => Setuser(e.target.value)}
        />
        <Input
          label='Mensaje'
          placeholder='ingresa un mensaje'
          value={message} onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <Button className='button' color='success' onPressEnd={writeUserMessage}>enviar</Button>
      </div>
    </>
  )
}

export default Smssg

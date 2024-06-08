import { getDatabase, ref, get } from 'firebase/database'
import app from '../firebase-config'
import { useState, useEffect } from 'react'

const UseWeather = () => {
  const [tiempo, setTiempo] = useState([])
  const [ultimo, setUltimo] = useState([])

  const fetchData = async () => {
    const db = getDatabase(app)
    const dbRef = ref(db, 'weather/2-push')
    const snapshot = await get(dbRef)
    if (snapshot.exists()) {
      setTiempo(Object.values(snapshot.val()))
    } else {
      alert('error')
    }
  }

  const fetchData2 = async () => {
    const db = getDatabase(app)
    const dbRef = ref(db, 'weather/1-set')
    const snapshot = await get(dbRef)
    if (snapshot.exists()) {
      setUltimo(Object.values(snapshot.val()))
    } else {
      alert('error')
    }
  }

  useEffect(() => {
    fetchData2()

    fetchData()
  })
  return {
    ultimo,
    tiempo
  }
}

export default UseWeather

import { useState, useEffect } from 'react'
import './App.css'
import { getDatabase, ref, get } from 'firebase/database'
import app from './firebase-config'

function App() {
  let [tiempo, setTiempo] = useState([]);
  let [ultimo, setUltimo] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "weather/2-push");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {
      setTiempo(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  }

  const fetchData2 = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "weather/1-set");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {
      setUltimo(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  }

  useEffect(() => {
    fetchData2()
    .then((response) => {
      return response.json()
    }).then((results) => {
      setUltimo(results)
    }).catch((error)=>{
      console.log(error)
    })

    fetchData()
    .then((response) => {
      return response.json()
    }).then((results) => {
      setTiempo(results)
    }).catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <ul>
        {tiempo.map( (item,index) => (
        <li key={index}>
          Temp : {item.temperatura} |
          humedad: {item.humedad} |
          presión: {item.presión}
        </li>
        )        
      )}
      </ul>
    </>
  )
}

export default App

import { useLocation } from 'react-router-dom'

const Error404 = () => {
  const location = useLocation()

  return (
    <>
      <h1>
        Error 404
      </h1>
      <h1>
        página no encontrada: {location.pathname}
      </h1>
    </>
  )
}

export default Error404

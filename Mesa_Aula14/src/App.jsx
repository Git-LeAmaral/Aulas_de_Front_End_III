import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [comentarios, setComentarios] = useState([])

  useEffect(() => {
    async function carregarComentarios() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments?_limit=10'
      )
      const comentarios = await response.json()
      setComentarios(comentarios)
    }
    carregarComentarios()
  }, [])

  return (
    <>
      {comentarios &&
        comentarios.map(({ id, name, body }) => {
          return (
            <ul key={id}>
              <li>Nome: {name}</li>
              <li>Comentário: {body}</li>
            </ul>
          )
        })}
    </>
  )
}

export default App

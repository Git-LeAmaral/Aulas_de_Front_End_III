import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [state, setState]=useState('')
  useEffect (() => {
    setTimeout (() => {
      setState ('pizza')
      console.log(`O componente foi atualizado`);
    },2000)
  }, [])

  function cancelar() {
    setState ('cancelado')
    alert('Pedido cancelado')
  }

  return (
    <>
      <div>
        <h1>Seu pedido: {state}</h1>
        <button onClick={cancelar}>Cancelar Pedido</button>
      </div>
    </>
  )
}

export default App

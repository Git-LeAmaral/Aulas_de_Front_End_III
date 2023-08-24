import User from './User;'
import './App.css'

const listaDeUsuarios = [
  {
    userName: 'Leandro',
    image: 'http://github.com/Git-LeAmaral.png'
  },

  {
    userName: 'Andrea',
    image: 'http://github.com/Andrea-Santos20.png'
  },

  {
    userName: 'Luiz',
    image: 'http://github.com/LuisBraga31.png'
  }
]

function App() {
  return (
    <>
      <User user={listaDeUsuarios[0]} />
    </>
  )
}

export default App

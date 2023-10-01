import { useEffect, useState } from 'react'
import { PerfilGithub } from './components/PerfilGithub'
import styles from './app.module.css'

function App() {
  const [perfil, setPerfil] = useState({})
  const [exibePerfil, setExibePerfil] = useState(false)

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const response = await fetch(
          'https://api.github.com/users/Git-LeAmaral'
        )
        const perfil = await response.json()
        setPerfil(perfil)
      } catch (error) {
        console.log(error.message)
      }
    }

    carregarPerfil()
  }, [])

  const alternaVisibilidade = () => {
    setExibePerfil(valorAnterior => !valorAnterior)
  }

  return (
    <>
      <main className={styles.main}>
        <section id="card" className={styles.cardSection}>
          <button onClick={alternaVisibilidade}>
            {exibePerfil ? 'Esconder' : 'Exibir'} Perfil{' '}
          </button>
        </section>

        <div className={styles.cardContainer}>
          {exibePerfil && <PerfilGithub perfil={perfil} />}
        </div>
      </main>
    </>
  )
}

export default App

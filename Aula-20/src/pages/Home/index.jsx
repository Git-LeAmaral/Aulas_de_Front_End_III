import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PerfilGithub } from '../../components/PerfilGithub'
import { api } from '../../services/api'
import { GithubContext } from '../../contexts/GithubContext'
import styles from './home.module.css'

export function Home() {
  // Estado para a listagem do perfil
  const { listaDePerfis, addUsuarioALista } = useContext(GithubContext)

  // Estado para o form
  const [usuarioASerBuscado, setUsuarioASerBuscado] = useState('')

  const buscaDadosDoPerfil = async event => {
    event.preventDefault()

    if (usuarioASerBuscado.length > 0) {
      try {
        const { data } = await api.get(`/users/${usuarioASerBuscado}`)
        addUsuarioALista(data)
      } catch (error) {
        if (error.response.data.message === 'Not Found') {
          alert('Usuário não encontrado')
        }
      }
    } else {
      alert('O campo de pesquisa deve ser preenchido!')
    }
  }

  return (
    <>
      <main className={styles.main}>
        <section id="card" className={styles.cardSection}>
          <form onSubmit={buscaDadosDoPerfil}>
            <input
              type="text"
              placeholder="Insirao nome do usuário do github"
              id="nomeUsuario"
              name="nomeUsuario"
              onChange={event => setUsuarioASerBuscado(event.target.value)}
              value={usuarioASerBuscado}
            />
            <button type="submit">Pesquisar</button>
          </form>
          <div className={styles.cardContainer}>
            {listaDePerfis &&
              listaDePerfis.map(perfil => {
                return (
                  <Link key={perfil.id} to={`/${perfil.login}`}>
                    <PerfilGithub perfil={perfil} />
                  </Link>
                )
              })}
          </div>
        </section>
      </main>
    </>
  )
}

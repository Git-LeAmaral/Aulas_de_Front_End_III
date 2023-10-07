import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApiRequest} from '../../hooks/useApiRequest'
import { GithubContext } from '../../contexts/GithubContext'
import { PerfilGithub } from '../../components/PerfilGithub'

import styles from './userDetails.module.css'

export function UserDetails() {
  const { repositoryOwner } = useParams();
  const repositoriosPerfil = useApiRequest(`/users/${repositoryOwner}/repos`)
  const { listaDePerfis, buscarPerfilPeloLogin } = useContext(GithubContext)

  let perfil = buscarPerfilPeloLogin(listaDePerfis, repositoryOwner);

  return (
    <section className={styles.userDetails}>
      <div className={styles.cardContainer}>
        <PerfilGithub perfil={perfil} />
      </div>
      <h1>Esses são os meus repositórios</h1>
      <ul>
        {repositoriosPerfil && repositoriosPerfil.map(repositorio => (
          <li key={repositorio.id}>
            <Link to={`/${repositoryOwner}/${repositorio.name}`}>
              {repositorio.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

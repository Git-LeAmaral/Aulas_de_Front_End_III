import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GithubContext } from '../../contexts/GithubContext'
import { PerfilGithub } from '../../components/PerfilGithub'

import styles from './userDetails.module.css'

export function UserDetails() {
  const { repositoryOwner } = useParams()
  const { listaDePerfis, buscarPerfilPeloLogin } = useContext(GithubContext)

  const perfil = buscarPerfilPeloLogin(listaDePerfis, {
    login: repositoryOwner
  })

  return (
    <section className={styles.UserDetails}>
      <div className={styles.cardContainer}>
        <PerfilGithub perfil={perfil} />
      </div>
    </section>
  )
}

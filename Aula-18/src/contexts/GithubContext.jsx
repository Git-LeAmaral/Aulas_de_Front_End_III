import { createContext, useState } from 'react'

export const GithubContext = createContext()

export function GithubContextProvider({ children }) {
  const [listaDePerfis, setListaDePerfis] = useState([])

  const buscarPerfilPeloLogin = (perfisAntigos, perfilLogin) => {
    const perfil = perfisAntigos.find(
      perfilAntigo => perfilAntigo.login === perfilLogin.login
    )
    return perfil
  }

  const addUsuarioALista = perfilNovo =>
    setListaDePerfis(perfisAntigos => {
      // Verifica se o perfil existe
      const perfilExiste = buscarPerfilPeloLogin(perfisAntigos, perfilNovo)

      // Caso o perfil não existir, adiciona
      if (!perfilExiste) {
        return [...perfisAntigos, perfilNovo]
      }

      // Se existe, retorna a lista antiga
      return perfisAntigos
    })

  return (
    <GithubContext.Provider
      value={{ listaDePerfis, addUsuarioALista, buscarPerfilPeloLogin }}
    >
      {children}
    </GithubContext.Provider>
  )
}

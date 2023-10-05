import { Link } from 'react-router-dom'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>GitHubble</h1>
      </Link>

      <nav>
        <ul>
          <Link to="/Git-LeAmaral/Checkpoint-II">
            Link para o Checkpoint II
          </Link>
        </ul>
      </nav>
    </header>
  )
}

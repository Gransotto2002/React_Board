import Link from 'next/link'
import styles from './style.module.scss'
import { SingInButton } from '../SingInButton'

export function Header(){
  return(
    <header className={styles.headerContainer}>
     <div className={styles.headerContent}>
      <Link href={'/'}>
        <img src="/images/logo.svg" alt="Meu Board" />
      </Link>
      <nav>
        <Link href={'/'}>
          <a>Home</a> 
        </Link>
        <Link href={'/board'}>
           <a>Meu board</a>
        </Link>
      </nav>

      <SingInButton/>
     </div>
    </header>
  )
}
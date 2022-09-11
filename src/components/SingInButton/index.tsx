import {signIn, signOut, useSession} from 'next-auth/client'
import styles from './style.module.scss'
import {FaGithub} from 'react-icons/fa'
import  {FiX}  from 'react-icons/fi'

export function SingInButton(){

  const [session] = useSession()
  
  return session ? (
    <button 
    type='button'
    className={styles.signInButton}
    onClick={() => signOut()}
    >
      <img src={session.user.image} alt="Usuário" />
      Olá {session.user.name}
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <button 
    type='button'
    className={styles.signInButton}
    onClick={() => signIn('github')}
    >
      <FaGithub 
      color="#FFB800"
      />
      Entrar com o GitHub
    </button>
  )

}
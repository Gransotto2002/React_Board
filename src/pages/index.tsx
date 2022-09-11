import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SupportButton } from '../components/SupportButton'
import styles from '../styles/styles.module.scss'
import firebase from '../services/firebaseConnection'
import { useState } from 'react'


type Data =  {
  id: string;
  donate: boolean;
  lastDonate: Date;
  image: string;
}

interface HomeProps{
  data : string;
}

export default function Home({data} : HomeProps) {

  const  [donaters, setDonaters] = useState<Data[]>(JSON.parse(data))


  return (
    <>
     <Head>
      <title>Board - Organizando tarefas</title>
    </Head>
    <main className={styles.contentContainer}>
      <img src="/images/board-user.svg" alt="ferramente_board" />
   
    <section className={styles.callToAction}>
      
      <h2>Uma ferramenta para seu dia a dia Escreva, planeje e organize-se...</h2>

      <p>
        <span>100% Gratuita </span>
        e online.
      </p>

    </section>

    {donaters.length !== 0 && <h3> Apoiadores : </h3>}
    <div className={styles.donaters}>
      {donaters.map(user => (
        <img  key={user.id} src={user.image}/>
      ))}
    </div>
    </main>

    <SupportButton/>

    </>
  )
}


export const getStaticProps : GetStaticProps = async () =>{
  const donaters = await firebase.firestore().collection('users').get()

  const data = JSON.stringify(donaters.docs.map(user => {
    return {
      id: user.id,
      ...user.data(),
    }

  }))

  return{
    props:{
      data
    },
    revalidate: 60 * 60 //Atualiza a cada 60 minutos
  }
}
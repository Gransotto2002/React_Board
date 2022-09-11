import styles from './styles.module.scss'
import Head from 'next/head'
import { getSession, session } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import { PayPalButtons } from '@paypal/react-paypal-js'
import firebase from '../../services/firebaseConnection'
import { useState } from 'react'


// AV-EUyUj7obbV31fNgHjuiHerZ0GQVqHIO0dkpBgWgozolYIeMWPIBnkl1lt8BYi_RrzUONKpXWGIqXJ
// <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>

interface DonateProps{
    user:{
        name: string;
        id: string;
        image: string;
    }
}



export default function Donate({user} : DonateProps){
    const [vip, setVip] = useState(false)


    async function handleSaveDonate(){
        await firebase.firestore().collection('users')
        .doc(user.id)
        .set({
            donate: true,
            lastDonate: new Date(),
            image: user.image
        })
        .then( () => {
            setVip(true)
        }

        )

    }

    return(

        <>
            <Head>
                <title>Contribua Conosco!</title>
            </Head>

            <main className={styles.container}>
                <img src="/images/rocket.svg" alt='seja apoiador'/>
                
                {vip && (
                    <div className={styles.vip}>
                        <img src={user.image} alt="novo apoiador" />
                        <span>Parabéns, você é um novo apoiador</span>
                    </div>
                )}

                <h1>Seja um apoiador desse projeto 🏆</h1>
                <h3>Contribua com apenas <span>R$ 1.00</span> e desbloqueie funções excluvivas !</h3>

                <PayPalButtons
                    createOrder={ (data, actions) => {
                       return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '1'
                            }
                        }]
                       })
                    }}

                    onApprove = {(data, actions) => {
                        return actions.order.capture()
                        .then( details => {
                            console.log('Compra Aprovada' + details.payer.name.given_name);
                            handleSaveDonate()
                        })
                    }}
                />
            </main>
        </>
        
    )
}



export const getServerSideProps : GetServerSideProps = async ({req}) => {
    const session = await getSession({req})

    if(!session?.id){
        return{
            redirect:{
                destination: '/board',
                permanent: false
            }
        }
    }


    const user = {
        name: session?.user.name,
        id: session?.id,
        image: session?.user.image
    }

    return{
        props:{
          user
        }
    }
}
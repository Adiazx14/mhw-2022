import Head from 'next/head'
import Image from 'next/image'
import IssueTable from '../components/IssueTable'
import UserForm from '../components/UserForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MHW 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <UserForm/>
     
      
      </main>

    
    </div>
  )
}

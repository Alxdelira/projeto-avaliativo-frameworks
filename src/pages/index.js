import AppBar from '@/components/AppBar'
import Cards from '@/components/Cards';
import Container from '@/components/Container';
import Head from 'next/head'
import { useEffect, useState } from 'react'
export default function Home() {

  const [response, setResponse] = useState()

  async function getEventos() {
    try {
      const res = await fetch("http://localhost:3001/eventos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      setResponse(data);    
    } catch (error) {
      console.log(error)      
    }
  }

  useEffect(() => {
    getEventos()
  }, [])


  return (
    <>
      <Head>
        <title>Plataforma de Eventos</title>
        <meta name="Avaliativo frameworks" content="Atividade avaliativa frameworks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar>Plataforma de Eventos</AppBar>
      <Container>
      {response && response.map((item, index) => {
        return (
          <Cards key={index} item={item} />)}
      )}
      </Container>
    </>
  )
}

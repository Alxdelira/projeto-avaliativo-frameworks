import Cards from '@/components/Cards';
import Container from '@/components/Container';
import Loading from '@/components/Loading';
import { useEffect, useState } from 'react';

export default function Eventos() {
  const [eventos, setEventos] = useState();

  async function getEventos() {
    try {
      const res = await fetch(`http://localhost:3001/eventos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      setEventos(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEventos();
  }, []);

  if (!eventos) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        {eventos.map((evento) => {
          return(           
            <Cards key={evento.id} evento={evento} href={`/eventos/${evento.id}`} />        
            )})}
      </Container>
    </>
  );
}

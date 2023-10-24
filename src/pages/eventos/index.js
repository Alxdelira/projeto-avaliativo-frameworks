import Cards from "@/components/Cards";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import style from "@/styles/Home.module.css";
import Filtro from "@/components/Filtro";
import { api } from "@/service/apiClient";
import Scroll from "@/components/Scroll";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  const getEventos = async () => {
    try {
      const res = await api.get(`/eventos/`);
      setEventos(res.data);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventos();
  }, []);

  if (!eventos) {
    return <Loading />;
  }


  return (
    <>
      <Filtro  />
      <Scroll />
      <div className={style.texto}>
        <h1>EVENTOS DA PLATAFORMA</h1>
        <h3>Apresenta informações dos eventos cadastrados na Plataforma</h3>
        <div className={style.separador} />
      </div>
      <Container>
        {eventos?.map((evento) => (
          <Cards
            key={evento.id}
            evento={evento}
            href={`/eventos/${evento.id}`}
          />
        ))}
      </Container>
    </>
  );
}

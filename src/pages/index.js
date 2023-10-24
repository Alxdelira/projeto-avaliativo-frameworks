import Container from "@/components/Container";
import Loading from "@/components/Loading";
import { api } from "@/service/apiClient";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from '@/styles/Home.module.css'

export default function Home() {
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
      <Container>
      <div className={style.separador} />
        <Carousel>
          {eventos?.map((evento) => (
            <div key={evento}>
              <Image
                height={600}
                width={500}
                src={evento.imagem}
                alt="Imagem 3"
              />
              <p className="legend">{evento.titulo}</p>
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

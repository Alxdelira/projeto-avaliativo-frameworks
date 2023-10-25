import Container from "@/components/Container";
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

  return (
    <>
    <Container>
      <Carousel autoPlay={true} infiniteLoop={true} width={1080}>
        {eventos?.map((evento) => (
          <div key={evento}>
            <Image
              height={522}
              width={900}
              src={evento.imagem}
              alt={evento.titulo}
            />
            <p className="legend">{evento.titulo}</p>
          </div>
        ))}
      </Carousel>
      </Container>
    </>
  );
}

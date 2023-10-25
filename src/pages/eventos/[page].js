import Label from "@/components/Label";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiMap } from "react-icons/bi";
import Message from "@/components/Mensage";
import { api } from "@/service/apiClient";
import Image from "next/image";
import style from '@/styles/page.module.css'
import { formatData } from "@/utils/mascara";

export default function EventoPage() {

    const [eventos, setEventos] = useState()
    const router = useRouter();
    const { page } = router.query;

    async function getEventosID() {
        try {
            const res = await api.get(`/eventos/${page}`);
            const data = await res.data;
            setEventos(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEventosID()
    }, [router])

    if (!eventos) {
        return <Loading />
    }

    if(page != eventos.id){
        return  <Message />    
    }

    if (eventos) return (
        <>
        <main className={style.main}>
            <div className={style.conteiner} >
                <h1 className={style.titulo}>{eventos.titulo}</h1>
                <Image
                className={style.image}
                    width={400}
                    height={400}
                    src={eventos.imagem}  
                    alt={eventos.titulo}                  
                />
                <div className={style.text}>
                    <div className={style.descricao}>
                    <Label>{eventos.descricao}</Label>
                    </div>
                    <Label>{formatData(eventos.dataInicio)}</Label>
                    <Label>{formatData(eventos.dataFim)}</Label>
                </div>
                <div className={style.local} >
                    <Label>
                        <BiMap />
                        {eventos.local}
                    </Label>
                </div>
            </div>  
        </main>
             </>
    )

}
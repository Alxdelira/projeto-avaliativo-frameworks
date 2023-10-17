import Label from "@/components/Label";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiMap } from "react-icons/bi";
import style from './style.module.css'
import Message from "@/components/Mensage";

export default function EventoPage() {

    const [eventos, setEventos] = useState()
    const router = useRouter();
    const { page } = router.query;

    async function getEventosID() {
        try {
            const res = await fetch(`http://localhost:3001/eventos/${page}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
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
            <div className={style.content} >
                <h1>{eventos.titulo}</h1>
                <img
                    src={eventos.imagem}                    
                />
                <div className={style.text}>
                    <Label>{eventos.descricao}</Label>
                    <Label>{eventos.dataInicio}</Label>
                    <Label>{eventos.dataFim}</Label>
                </div>
                <div className={style.local}>
                    <Label>
                        <BiMap />
                        {eventos?.local}
                    </Label>
                </div>
            </div>

        </>
    )

}

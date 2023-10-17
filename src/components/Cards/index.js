import { useState } from 'react'
import style from './style.module.css'
import { BiMap } from 'react-icons/bi'
import Link from 'next/link'

export default function Cards({ evento, href }) {
    return (
        <>     
            <div className={style.container}>
                <div className={style.card}>
                    {/* <span>{evento.id}</span> */}
                    <h2>{evento.titulo}</h2>
                    <img src={evento.imagem} alt={evento.titulo} />
                    {/* <p>{evento.descricao}</p> */}
                    <h3>
                        <BiMap />
                        {evento.local}</h3>
                    <div className={style.tags}>
                        <h6>{evento.dataInicio}</h6>
                        <hr />
                        <h6>{evento.dataFim}</h6>
                    </div>
                    <div className={style.content}>
                        <Link href={href}>Ver mais</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
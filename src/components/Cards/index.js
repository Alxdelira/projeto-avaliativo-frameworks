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
                    <img src={evento.imagem} alt={evento.titulo} />
                    {/* <p>{evento.descricao}</p> */}
                    {/* <h3>
                        <BiMap />
                    {evento.local}</h3> */}
                    <h2>{evento.titulo}</h2>
                    <div className={style.tags}>
                        <h6>De</h6>
                        <h6>{evento.dataInicio}</h6><h6>a</h6>                        
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
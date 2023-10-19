import style from './style.module.css';
import { formatData } from '@/utils/mascara';
import Button from '../Button';
import Link from 'next/link';

export default function Cards({ evento, href }) {
   
    return (
        <>
            <div className={style.container}>
                <div className={style.card}>
                    <img src={evento.imagem} alt={evento.titulo} />
                    <h2>{evento.titulo}</h2>
                    <div className={style.tags}>
                        <h6>De</h6>
                        <h6>{formatData(evento.dataInicio)}</h6>
                        <h6>a</h6>
                        <h6>{formatData(evento.dataFim)}</h6>
                    </div>
                    <div className={style.content}>
                        <Link href={href}>Ver mais</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

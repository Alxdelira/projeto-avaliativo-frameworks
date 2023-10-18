import style from './style.module.css'
import {FiCalendar} from 'react-icons/fi'

export default function Footer() {
    return (
        <>
            <div className={style.footer}>
                <div className={style.titulo}>
                    <FiCalendar className={style.icon} />
                    <h1>PLATAFORMA</h1>
                    <h2>EVENTO</h2>
                </div>
                <div className={style.subtitulo}>
                    <p>A Plataforma Evento é uma ferramenta de gerenciamento de eventos do IFRO. Uma plataforma de gestão de eventos (para congressos, palestras,</p>
                    <p>semanas acadêmicas, cursos e etc) que além de fornecer uma página com informações do evento, realiza o controle de eventos com cadastro e </p>
                    <p>certificados.</p>
                </div>
                <div className={style.separador}></div>
                <div className={style.texto} >
                    <p>Alexandre Nofueira de Lira - VHA/RO</p>
                    <p>© 2023 All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}
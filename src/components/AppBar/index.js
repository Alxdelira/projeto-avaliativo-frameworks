import style from "./style.module.css";
import Link from "next/link";

export default function AppBar() {
    return (
        <>
            <div className={style.appBar}>
                <div className={style.titulo}>
                    <h1>PLATAFORMA</h1>
                    <h2>EVENTO</h2>                    
                    <div className={style.navLinks}>
                        <Link href="/">Home</Link>
                        <Link href="/eventos">Eventos</Link>
                        <Link href="https://alxdelira.github.io/projeto-links/" target='_blank'>Contato</Link>
                    </div>
                </div>
            </div>             
          
        </>
    );
}
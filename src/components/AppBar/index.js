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
                        <Link href="/eventos">Eventos</Link>
                        <Link href="/certificados">Certificados</Link>
                        <Link href="/manuais">Manuais</Link>
                    </div>
                </div>
            </div>             
          
        </>
    );
}
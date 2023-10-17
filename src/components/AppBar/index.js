import style from "./style.module.css";
import Link from "next/link";

export default function AppBar({ children }) {
    return (
        <div className={style.appBar}>
            <div className={style.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/cadastrar">Cadastrar</Link>
                <Link href="/alterar">Alterar</Link>
            </div>
            <div className={style.titulo}>{children}</div>
        </div>
    );
}
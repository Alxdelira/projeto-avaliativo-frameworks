import style from './style.module.css'

export default function Label ({children}) {
    return(
        <>
        <div className={style.container}>
            <label className={style.label}>{children}</label>
        </div>
        </>
    )
}
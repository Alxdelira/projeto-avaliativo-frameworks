import style from './style.module.css'

export default function Button ({type,children}) {


    
    return(
        <>
            <div className={style.content}>
                <button type={type} className={style.button}>{children}</button>
            </div>
        </>
    )
}
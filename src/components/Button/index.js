import style from './style.module.css'

export default function Button ({type,children, onClick}) {


    
    return(
        <>
            <div className={style.content}>
                <button onClick={onClick} type={type} className={style.button}>{children}</button>
            </div>
        </>
    )
}
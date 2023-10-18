import style from './style.module.css'

export default function DataTime ({id,value,onChange, ...props}){
    return(
        <>
        <div className={style.data}>
            <input type='date'
            id={id}
            value={value}
            onChange={onChange}
            {...props}
            />
        </div>
        </>
    )
}
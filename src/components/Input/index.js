import style from './style.module.css'

export default function Input({ type, onChange, value, id, placeholder, ...props }) {
    return (
        <>
            <div className={style.content}>
                <input 
                className={style.input} 
                type={type} 
                onChange={onChange} 
                value={value} 
                id={id} 
                placeholder={placeholder} 
                {...props} 
                />
            </div>
        </>
    )
}
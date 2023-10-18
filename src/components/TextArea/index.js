import style from './style.module.css'


export default function TextArea({value,id,onChange, ...props}) {
    return(
        <>
        <div className={style.container}>
            <textarea className={style.textarea}
             id={id}
             value={value}
             onChange={onChange}
             {...props}
            />
        </div>
        </>
    )
}
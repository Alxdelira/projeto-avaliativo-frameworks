import style from './style.module.css'

export default function Cards({ item }) {
    return (
        <>
            <div className={style.container}>
                <div className={style.card}>
                    <h2>{item.titulo}</h2>
                    <img src={item.imagem} alt={item.titulo} />
                    {/* <p>{item.descricao}</p> */}
                    <h3>{item.local}</h3>
                    <div className={style.tags}>
                        <h6>{item.dataInicio}</h6>
                        <hr />
                        <h6>{item.dataFim}</h6>
                    </div>
                    <div className={style.content}>
                        <button>Ver mais</button>
                    </div>
                </div>
            </div>
        </>
    )
}
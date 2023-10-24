import Link from "next/link";
import style from "./style.module.css";

export default function Filtro({ onChange, onClick, value, ...props }) {
  return (
    <>
      <div className={style.content}>
        <div className={style.texto}>
          <p>
            A Plataforma Evento é uma ferramenta capaz de fornecer uma página
            com informações sobre o evento, inscrições de participantes e
            certificação de todos os envolvidos.
          </p>
        </div>
        <div className={style.container}>
          <div className={style.inputBusca}>
            <input
              type="text"
              placeholder="Digite o nome do evento que está buscando"
              onChange={onChange}
              onClick={onClick}
              {...props}
              value={value}
            />
            <button>Buscar</button>
          </div>
          <div className={style.inputAuxiliar}>
            <Link href={"/cadastrar"}>Cadastrar</Link>
            <Link href={"/alterar"}>Alterar</Link>
          </div>
        </div>
      </div>
    </>
  );
}

import DataTime from '@/components/DateTime/Index'
import style from './style.module.css'
import TextArea from '@/components/TextArea'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useState } from 'react'
import { api } from '@/service/apiClient'
import { MdCreateNewFolder } from "react-icons/md";
import Link from 'next/link'

export default function Cadastrar() {
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: "",
        imagem: ""
    });


    async function inserirEvento(e) {
        e.preventDefault();
        try {
            await api.post("/eventos", evento)
            limparCampos();
            setCadastroSucesso(true);
            setTimeout(() => {
                setCadastroSucesso(false);
              }, 3000);
        } catch (error) {
            console.log(error)
        }
    }


    function limparCampos() {
        setEvento({
            titulo: "",
            descricao: "",
            dataInicio: "",
            dataFim: "",
            local: "",
            imagem: ""
        })
    }
    return (
        <>
            <form
                onSubmit={e => inserirEvento(e)}
                className={style.container}>
                <div className={style.page}>
                    <h1>Cadastrar Evento</h1>
                    <MdCreateNewFolder />
                </div>
                <div className={style.content} >
                    <div className={style.titulo}>
                        <label htmlFor="titulo">Titulo:</label>
                        <Input
                            type={'text'}
                            id={"titulo"}
                            value={evento.titulo}
                            onChange={(e) => setEvento({
                                ...evento,
                                titulo: e.target.value
                            })} />
                    </div>
                    <div className={style.titulo}>
                        <label htmlFor="descricao">Descrição:</label>
                        <TextArea
                            id={"descricao"}
                            value={evento.descricao}
                            onChange={(e) => setEvento({
                                ...evento,
                                descricao: e.target.value
                            })}
                        />
                    </div>
                    <div className={style.titulo}>
                        <label htmlFor="dataInicio">Começa em:</label>
                        <DataTime
                            id={"dataInicio"}
                            value={evento.dataInicio}
                            onChange={(e) => setEvento({
                                ...evento,
                                dataInicio: e.target.value
                            })
                            }
                        />
                    </div>
                    <div className={style.titulo}>
                        <label htmlFor="dataFim">Termina em:</label>
                        <DataTime
                            id="dataFim"
                            value={evento.dataFim}
                            onChange={(e) => setEvento({
                                ...evento,
                                dataFim: e.target.value
                            })}
                        />
                    </div>
                    <div className={style.titulo}>
                        <label htmlFor="local">Local:</label>
                        <Input
                            type={'text'}
                            id="local"
                            value={evento.local}
                            onChange={(e) => setEvento({
                                ...evento,
                                local: e.target.value
                            })}
                        />
                    </div>
                    <div className={style.file}>
                        <p></p>
                        <Input type={'file'}
                            id='imagem'
                            value={evento.imagem}
                            onChange={(e) => setEvento({
                                ...evento,
                                imagem: e.target.value
                            })}
                        />
                    </div>
                    <div className={style.reset}>
                        <Button type={'submit'}>Enviar</Button>
                        <Link href={'/eventos'}>Cancelar</Link>
                    </div>
                </div>
                {cadastroSucesso && (
                    <div className={style.mensagemSucesso}>
                        Cadastro realizado com sucesso!
                    </div>
                )}
            </form>
        </>
    )
}
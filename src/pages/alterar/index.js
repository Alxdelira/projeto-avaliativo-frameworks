import { useEffect, useState } from "react";
import style from "./style.module.css";
import Container from "@/components/Container";
import { api } from "@/service/apiClient";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import Modal from "@/components/Modal";
import TextArea from "@/components/TextArea";
import DataTime from "@/components/DateTime/Index";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Scroll from "@/components/Scroll";

export default function AlterarEvento() {
  const [eventos, setEventos] = useState([]);
  const [selectId, setSelectedUserId] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    local: "",
    imagem: "",
  });

  const updateEvento = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/eventos/${selectId}`, formData);
      setModal(false);
      getEventos();
    } catch (error) {
      console.log(error);
    }
  };
  const selectEvento = (evento) => {
    setSelectedUserId(evento.id);
    setModal(true);
    setFormData({
      titulo: evento.titulo,
      descricao: evento.descricao,
      dataInicio: evento.dataInicio,
      dataFim: evento.dataFim,
      local: evento.local,
      imagem: evento.imagem,
    });
  };

  const getEventos = async () => {
    try {
      const res = await api.get(`/eventos`);
      setEventos(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEvento = async (id) => {
    try {
      await api.delete(`/eventos/${id}`);
      const updatedEventos = eventos.filter((evento) => evento.id !== id);
      setEventos(updatedEventos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEventos();
  }, []);

  return (
    <>
      {modal && (
        <Modal
          minWidth="40%"
          modalTitle={`Atualizar Evento:`}
          isOpen={() => setModal(false)}
          onClose={setModal}
          xClose={true}
        >
          <form onSubmit={updateEvento}>
            <div>
              <div>
                <label htmlFor="titulo">Titulo:</label>
                <Input
                  type={"text"}
                  value={formData.titulo}
                  onChange={(e) =>
                    setFormData({ ...formData, titulo: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="descricao">Descrição:</label>
                <TextArea
                  id={"descricao"}
                  value={formData.descricao}
                  onChange={(e) =>
                    setFormData({ ...formData, descricao: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="dataInicio">Começa em:</label>
                <DataTime
                  id={"dataInicio"}
                  value={formData.dataInicio}
                  onChange={(value) =>
                    setFormData({ ...formData, dataInicio: value })
                  }
                />
              </div>
              <div>
                <label htmlFor="dataFim">Termina em:</label>
                <DataTime
                  id="dataFim"
                  value={formData.dataFim}
                  onChange={(value) =>
                    setFormData({ ...formData, dataFim: value })
                  }
                />
              </div>
              <div>
                <label htmlFor="local">Local:</label>
                <Input
                  type={"text"}
                  id="local"
                  value={formData.local}
                  onChange={(e) =>
                    setFormData({ ...formData, local: e.target.value })
                  }
                />
              </div>
              <div>
                <Input type={"file"} id="imagem" />
              </div>
              <div>
                <Button type={"submit"}>Enviar</Button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    <Scroll />
      <Container>
      <div >
        <h1> EDIÇÃO DE EVENTOS DA PLATAFORMA</h1>
      </div>
        <table className={style.tabela}>
          <thead>
            <tr className={style.tr}>
              <th className={style.th}>id</th>
              <th className={style.th}>Titulo</th>
              <th className={style.th}>Data Inicio</th>
              <th className={style.th}>Data Fim</th>
              <th className={style.th}>Local</th>
              <th className={style.th}>Imagem</th>
              <th className={style.th}>Ações</th>
            </tr>
          </thead>
          {eventos?.map((evento) => (
            <tbody key={evento.id}>
              <tr className={style.tr}>
                <td className={style.td}>{evento.id}</td>
                <td className={style.td}>{evento.titulo}</td>
                <td className={style.td}>{evento.dataInicio}</td>
                <td className={style.td}>{evento.dataFim}</td>
                <td className={style.td}>{evento.local}</td>
                <td className={style.td}>
                  <Image
                    height={50}
                    width={80}
                    src={evento.imagem}
                    alt={evento.titulo}
                  />
                </td>
                <td className={style.td}>
                  <button
                    onClick={() => deleteEvento(evento.id)}
                    className={style.deletar}
                  >
                    <FaRegTrashAlt />
                  </button>
                  <button
                    className={style.alterar}
                    onClick={() => {
                      selectEvento(evento);
                      setModal(true);
                    }}
                  >
                    <FaRegEdit />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Container>
    </>
  );
}

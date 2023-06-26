import Content from '../components/Content'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../../contexts/UserContext'
import TaskContext from '../../../contexts/TaskContext'
import fotoPerfil from '../../../../public/img/foto_perfil.png'

export default function Perfil() {
    const { dadosUser, buscaDadosUsuario } = useContext(UserContext)
    const [Carregando, setCarregando] = useState(false)
    const { email, name, plano, tel } = dadosUser[0] || {}

    useEffect(() => {
        async function listarUsuario() {
            setCarregando(true)
            await buscaDadosUsuario()
            setCarregando(false)
        }
        listarUsuario()
    }, [])

    return (
        <Content>
            <div className="card-header">
                <h3 className="card-title">Perfil de {name}</h3>
            </div>
            {Carregando ? <h3>Aguarde...</h3> :
                <div className="card-body my-5">
                    <div className="text-center">
                        <img
                            src={fotoPerfil}
                            alt="Foto de Perfil"
                            className="rounded-circle img-perfil"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome completo</label>
                        <input type="text" disabled className="form-control" id="nome" placeholder="Digite seu nome" defaultValue={name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" disabled className="form-control" id="email" placeholder="Digite seu e-mail" defaultValue={email} />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-11">
                                <label htmlFor="tel" className="form-label">Telefone</label>
                                <input type="tel" disabled className="form-control" id="tel" placeholder="Telefone" defaultValue={tel} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="plano" className="form-label">Plano selecionado</label>
                                <select disabled className="form-control" id="plano" defaultValue={plano} readOnly>
                                    <option selected disabled value={plano}>{plano}</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="dias" className="form-label">Dias restantes</label>
                                <input disabled type="text" className="form-control" id="dias" placeholder="dias" value="30 dias" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" disabled className="form-control bg-success text-white w-25" id="status" placeholder="Status do usuario" readOnly value="Ativo" />
                    </div>
                    <button type="submit" id='editar' className="btn btn-info">Editar</button>
                    <button type="button" className="btn btn-danger ms-3">Excluir conta</button>
                </div>
            }
        </Content >
    );
}
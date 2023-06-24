import Content from '../components/Content'
import { useContext, useState } from 'react'
import UserContext from '../../../contexts/UserContext'
import fotoPerfil from '../../../../public/img/foto_perfil.png'

export default function Perfil() {
    const {
        userName,
        userEmail,
        userDDD,
        userTel,
        userPlano,
    } = useContext(UserContext)


    const editar = () => {
        document.getElementById("nome").removeAttribute('disabled')
        document.getElementById("ddd").removeAttribute('disabled')
        document.getElementById("tel").removeAttribute('disabled')
        document.getElementById("plano").removeAttribute('disabled')
        document.getElementById("dias").removeAttribute('disabled')
        document.getElementById("editar").setAttribute('class', 'btn btn-success')
        document.getElementById("editar").firstChild.data = "Salvar"
    }


    return (
        <Content>
            <div className="card-header">
                <h3 className="card-title">Perfil de {userName}</h3>
            </div>
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
                        <input type="text" disabled className="form-control" id="nome" placeholder="Digite seu nome" defaultValue={userName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" disabled className="form-control" id="email" placeholder="Digite seu e-mail" defaultValue={userEmail} />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-1">
                                <label htmlFor="ddd" className="form-label">DDD</label>
                                <input type="number" disabled className="form-control" id="ddd" placeholder="DDD" defaultValue={userDDD} />
                            </div>
                            <div className="col-md-11">
                                <label htmlFor="tel" className="form-label">Telefone</label>
                                <input type="tel" disabled className="form-control" id="tel" placeholder="Telefone" defaultValue={userTel} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="plano" className="form-label">Plano selecionado</label>
                                <select disabled className="form-control" id="plano" defaultValue={userPlano} readOnly>
                                    <option selected disabled value={userPlano}>{userPlano}</option>
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
                    {/* <button type="submit" className="btn btn-primary">Salvar</button> */}
                    <button type="submit" id='editar' className="btn btn-info" onClick={editar}>Editar</button>
                    <button type="button" className="btn btn-danger ms-3">Excluir conta</button>
            </div>
        </Content >
    );
}
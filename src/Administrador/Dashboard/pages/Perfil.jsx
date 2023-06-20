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
                <form>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome completo</label>
                        <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" defaultValue={userName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" defaultValue={userEmail} />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="password" placeholder="Senha" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password2" className="form-label">Confirme sua senha</label>
                                <input type="password" className="form-control" id="password2" placeholder="Confirme sua senha" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-1">
                                <label htmlFor="ddd" className="form-label">DDD</label>
                                <input type="number" className="form-control" id="ddd" placeholder="DDD" defaultValue={userDDD} />
                            </div>
                            <div className="col-md-11">
                                <label htmlFor="tel" className="form-label">Telefone</label>
                                <input type="tel" className="form-control" id="tel" placeholder="Telefone" defaultValue={userTel} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="plano" className="form-label">Plano selecionado</label>
                                <select className="form-control" id="plano" defaultValue={userPlano} readOnly>
                                    <option selected disabled value={userPlano}>{userPlano}</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="dias" className="form-label">Dias restantes</label>
                                <input type="text" className="form-control" id="dias" placeholder="dias" value="30 dias" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input type="text" className="form-control bg-success text-white w-25" id="status" placeholder="Status do usuario" readOnly value="Ativo" />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                    <button type="button" className="btn btn-danger ms-3">Cancelar Plano</button>
                </form>
            </div>
        </Content >
    );
}
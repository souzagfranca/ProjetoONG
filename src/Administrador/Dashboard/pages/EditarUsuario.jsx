import Content from '../components/Content'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../../contexts/UserContext'
import TaskContext from '../../../contexts/TaskContext'
import fotoPerfil from '../../../../public/img/foto_perfil.png'

export default function EditarUsuario() {
    return(
        <Content>
                <div className="card-body my-5">
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome completo</label>
                        <input type="text" disabled className="form-control" id="nome" placeholder="Digite seu nome" defaultValue={name} />
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
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
        </Content >
    )
}
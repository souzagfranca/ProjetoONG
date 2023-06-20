import Content from '../components/Content'
import { useContext } from 'react'
import UserContext from '../../../contexts/UserContext'
import Button from '../components/Button'

export default function Fornecedor() {
    const { userName } = useContext(UserContext)
    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Lista de fornecedores</h2>
                <Button link="novoFornecedor" title="Adicionar novo fornecedor"/>
            </div>
            <div className="table-responsive">
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Codigo</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Cadastro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>789</td>
                            <td>Arroz</td>
                            <td>Skol</td>
                            <td>31/05/2023</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>101010</td>
                            <td>Feijão</td>
                            <td>Skol</td>
                            <td>01/01/2022</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>909090</td>
                            <td>Açucar</td>
                            <td>Skol</td>
                            <td>01/01/2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Content >
    );
}
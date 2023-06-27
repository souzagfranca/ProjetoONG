import Content from '../components/Content'
import { useContext, useEffect } from 'react'
import UserContext from '../../../contexts/UserContext'
import Button from '../components/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import TaskContext from '../../../contexts/TaskContext'

export default function Fornecedor() {
    const { dadosPessoa, buscaDadosPessoa, editarPessoa, deletaPessoa } = useContext(TaskContext)
    const { userName } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function listarPessoa() {
            await buscaDadosPessoa()
        }
        listarPessoa()
    }, [])

    async function handleRemover(key) {
        await deletaPessoa(key)
    }

    function handleEditar(key) {
        navigate("/painel/fornecedores/editarFornecedor/" + key)
    }

    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Lista de fornecedores</h2>
                <Button link="novoFornecedor" title="Cadastrar fornecedor" />
            </div>
            <div className="table-responsive">
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Empresa</th>
                            <th>CNPJ</th>
                            <th>Representante</th>
                            <th>Telefone</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosPessoa.map((pessoa, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{pessoa.empresa}</td>
                                <td>{pessoa.cnpj}</td>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.telefone}</td>
                                <td>
                                    <i onClick={() => handleEditar(pessoa.key)} title='Editar' class="bi bi-pencil-square text-info cursor-pointer"></i>
                                    <i onClick={() => handleRemover(pessoa.key)} title='Aapagar' class="bi bi-trash3 ms-3 text-danger cursor-pointer"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Content >
    );
}
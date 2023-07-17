import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Content from '../components/Content'
import TaskContext from '../../../contexts/TaskContext';

export default function Estoque() {
    const { buscaProdutos, dadosProdutos, remover } = useContext(TaskContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function listarProdutos() {
            await buscaProdutos()
        }
        listarProdutos()
    }, [])

    async function handleRemover(key) {
        await remover(key)
    }

    function handleEditar(key) {
        navigate("/painel/estoque/editar/" + key)
    }	

    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Lista de ações</h2>
                <Button link="novoProduto" title="Incluir ação" />
            </div>
            <div className="table-responsive">
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome da ação</th>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Materia doada</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosProdutos.map((produto, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{produto.name}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.quantidade}</td>
                                <td>{produto.valorcusto}</td>
                                <td>{produto.valorvenda}</td>
                                <td>
                                    <i onClick={() => handleEditar(produto.key)} title='Editar' className="bi bi-pencil-square text-info cursor-pointer"></i>
                                    <i onClick={() => handleRemover(produto.key)} title='Apagar' className="bi bi-trash3 ms-3 text-danger cursor-pointer"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Content >
    );
}
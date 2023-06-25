import { useContext, useState, useEffect } from 'react';
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
                <h2>Lista de produtos</h2>
                <Button link="novoProduto" title="Adicionar novo produto" />
            </div>
            <div className="table-responsive">
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Valor de Custo</th>
                            <th>Valor de Venda</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosProdutos.map((produto, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{produto.name}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.valorcusto}</td>
                                <td>{produto.valorvenda}</td>
                                <td>
                                    <i onClick={() => handleEditar(produto.key)} className="bi bi-pencil-square text-info"></i>
                                    <i onClick={() => handleRemover(produto.key)} className="bi bi-trash3 ms-3 text-danger"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Content >
    );
}
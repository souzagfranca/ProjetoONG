import { createContext, useState, useEffect } from "react";
import {
    insereCadastro, insereProduto,
    listarProdutos, listarPessoa,
    removeProduto, removePessoa,
    modificaProduto, modificaPessoa,
    modificaUsuario, inserePessoa
} from "../services/FirestoreService";

const TaskContext = createContext({
    insereCadastro: () => { },
    insereProduto: () => { },
    listarProdutos: () => { },
    removeProduto: () => { },
    modificaProduto: () => { },
    inserePessoa: () => { },
    listarPessoa: () => { },
    removePessoa: () => { },
    modificaPessoa: () => { },
    modificaUsuario: () => { },
})

export function TaskContextProvider(props) {
    const [novoCadastro, setNovoCadastro] = useState([])
    const [novoProduto, setNovoProduto] = useState([])
    const [nPessoa, setPessoa] = useState([])

    //estado do produto
    const [dadosProdutos, setDadosProdutos] = useState([])

    //estado do fornecedor
    const [dadosPessoa, setDadosPessoa] = useState([])

    async function inserir(usuario) {
        try {
            await insereCadastro(usuario)
            setNovoCadastro([...novoCadastro, usuario])
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function cadastrarProduto(produto) {
        try {
            await insereProduto(produto)
            setNovoProduto([...novoProduto, produto])
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function cadastrarPessoa(pessoa) {
        try {
            await inserePessoa(pessoa)
            setPessoa([...nPessoa, pessoa])
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function buscaDadosPessoa() {
        try {
            const dados = await listarPessoa()
            setDadosPessoa(dados)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function buscaProdutos() {
        try {
            const data = await listarProdutos()
            setDadosProdutos(data)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function remover(key) {
        try {
            await removeProduto(key)
            setDadosProdutos((valorAntigo) => valorAntigo.filter((item) => item.key != key))
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function deletaPessoa(key) {
        try {
            await removePessoa(key)
            setDadosPessoa((valorAntigo) => valorAntigo.filter((item) => item.key != key))
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function modificar(produto) {
        try {
            await modificaProduto(produto)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function editarPessoa(pessoa) {
        try {
            await modificaPessoa(pessoa)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function editarUsuario(usuario) {
        try {
            await modificaUsuario(usuario)
        } catch (error) {
            throw Error(error.message)
        }
    }

    const contexto = {
        insereCadastro: inserir,
        insereProduto: cadastrarProduto,
        cadastrarPessoa,
        buscaDadosPessoa,
        buscaProdutos,
        deletaPessoa,
        remover,
        modificar,
        editarPessoa,
        editarUsuario,
        dadosProdutos,
        dadosPessoa,
    }

    return (
        <TaskContext.Provider value={contexto}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext
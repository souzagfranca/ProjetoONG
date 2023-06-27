import { createContext, useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";

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
    const { userID } = useContext(UserContext)
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
            await insereProduto(produto, userID)
            setNovoProduto([...novoProduto, produto])
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function cadastrarPessoa(pessoa) {
        try {
            await inserePessoa(pessoa, userID)
            setPessoa([...nPessoa, pessoa])
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function buscaDadosPessoa() {
        try {
            const dados = await listarPessoa(userID)
            setDadosPessoa(dados)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function buscaProdutos() {
        try {
            const data = await listarProdutos(userID)
            setDadosProdutos(data)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function remover(key) {
        try {
            await removeProduto(key, userID)
            setDadosProdutos((valorAntigo) => valorAntigo.filter((item) => item.key != key))
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function deletaPessoa(key) {
        try {
            await removePessoa(key, userID)
            setDadosPessoa((valorAntigo) => valorAntigo.filter((item) => item.key != key))
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function modificar(produto) {
        try {
            await modificaProduto(produto, userID)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function editarPessoa(pessoa) {
        try {
            await modificaPessoa(pessoa, userID)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function editarUsuario(usuario) {
        console.log(usuario)
        try {
            await modificaUsuario(usuario, userID)
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
import { createContext, useState, useEffect } from "react";
import { insereCadastro, listarDadosUsuario, insereProduto, listarProdutos } from "../services/FirestoreService";

const TaskContext = createContext({
    insereCadastro: () => { },
    insereProduto: () => { },
    listarDadosUsuario: () => { },
    listarProdutos: () => { },
    email: '',
    nome: '',
    telefone: '',
    plano: '',

})

export function TaskContextProvider(props) {
    const [novoCadastro, setNovoCadastro] = useState([])
    const [novoProduto, setNovoProduto] = useState([])

    //estados do perfil
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [plano, setPlano] = useState('')

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

    useEffect(() => {
        async function listarDados() {
            try {
                const dados = await listarDadosUsuario()
                const { email, name, plano, tel } = dados[0]
                setEmail(email)
                setNome(name)
                setTelefone(tel)
                setPlano(plano)
            } catch (error) {
                throw Error(error.message)
            }
        }
        listarDados()
    }, [])

    useEffect(() => {
        async function produtos() {
            try {
                const produtos = await listarProdutos()
            } catch (error) {
                throw Error(error.message)
            }
        }
        produtos()
    }, [])

    const contexto = {
        insereCadastro: inserir,
        insereProduto: cadastrarProduto,
        email,
        nome,
        telefone,
        plano,
    }

    return (
        <TaskContext.Provider value={contexto}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext
import { createContext, useState, useEffect } from "react";
import { insereCadastro, listarDadosUsuario, insereProduto, listarProdutos, removeProduto, modificaProduto } from "../services/FirestoreService";

const TaskContext = createContext({
    insereCadastro: () => { },
    insereProduto: () => { },
    listarDadosUsuario: () => { },
    listarProdutos: () => { },
    removeProduto: () => { },
    modificaProduto: () => { },
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

    //estado do produto
    const [dadosProdutos, setDadosProdutos] = useState([])

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

    async function modificar(produto) {
        try {
            await modificaProduto(produto)
        } catch (error) {
            throw Error(error.message)
        }
    }

    const contexto = {
        insereCadastro: inserir,
        insereProduto: cadastrarProduto,
        buscaProdutos,
        remover,
        modificar,
        email,
        nome,
        telefone,
        plano,
        dadosProdutos,
    }

    return (
        <TaskContext.Provider value={contexto}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext
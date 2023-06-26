import { getFirestore, collection, addDoc, getDocs, query, where, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { app } from './FirebaseConfig'

const db = getFirestore(app)

export async function insereCadastro(usuario) {
    const idUsuario = usuario.email
    try {
        const docRef = await addDoc(collection(db, idUsuario), usuario)
            .then((docRef) => {
                console.log('Cadastro realizado com sucesso!', docRef.id)
            })

    } catch (error) {
        console.error('Erro ao cadastrar usuário.', error)
    }
}

export async function insereProduto(produto) {
    try {
        const docRef = await addDoc(collection(db, "guilhermefran8@gmail.com"), produto)
            .then((docRef) => {
                console.log('Cadastro realizado com sucesso!', docRef.id)
            })

    } catch (error) {
        console.error('Erro ao cadastrar produto.', error)
    }
}

export async function inserePessoa(pessoa) {
    try {
        const docRef = await addDoc(collection(db, "guilhermefran8@gmail.com"), pessoa)
            .then((docRef) => {
                console.log('Cadastro realizado com sucesso!', docRef.id)
            })

    } catch (error) {
        console.error('Erro ao cadastrar fornecedor.', error)
    }
}

export async function listarDadosUsuario() {
    const dadosUsuario = []
    const response = await getDocs(
        query(
            collection(db, "guilhermefran8@gmail.com"),
            where("tipo", '==', 'usuario')
        )
    )
    response.forEach((doc) => {
        dadosUsuario.push({ key: doc.id, ...doc.data() })
    })
    return dadosUsuario
}

export async function listarProdutos() {
    const dadosProdutos = []
    //console.log(dadosProdutos)
    const response = await getDocs(
        query(
            collection(db, "guilhermefran8@gmail.com"),
            where("tipo", '==', 'produto')
        )
    )
    response.forEach((doc) => {
        dadosProdutos.push({ key: doc.id, ...doc.data() })
    })
    return dadosProdutos
}

export async function listarPessoa() {
    const dadosPessoa = []
    const response = await getDocs(
        query(
            collection(db, "guilhermefran8@gmail.com"),
            where("tipo", '==', 'pessoa')
        )
    )
    response.forEach((doc) => {
        dadosPessoa.push({ key: doc.id, ...doc.data() })
    })
    return dadosPessoa
}

export async function listarFornecedores() {
    const dadosPessoa = []
    const response = await getDocs(
        query(
            collection(db, "guilhermefran8@gmail.com"),
            where("tipo", '==', 'pessoa')
        )
    )
    response.forEach((doc) => {
        dadosPessoa.push({ key: doc.id, ...doc.data() })
    })
    return dadosPessoa
}

export async function removeProduto(key) {
    await deleteDoc(doc(db, "guilhermefran8@gmail.com", key))
}

export async function removePessoa(key) {
    await deleteDoc(doc(db, "guilhermefran8@gmail.com", key))
}

export async function modificaProduto(produto) {
    console.log(produto)
    await updateDoc(doc(db, "guilhermefran8@gmail.com", produto.key), 
        {name: produto.name, 
		marca: produto.marca, 
		quantidade: produto.quantidade, 
		valorcusto: produto.valorcusto, 
		valorvenda: produto.valorvenda})
}

export async function modificaPessoa(pessoa) {
    await updateDoc(doc(db, "guilhermefran8@gmail.com", pessoa.key), 
        {nome: pessoa.nome, 
		cpf: pessoa.cpf, 
		empresa: pessoa.empresa, 
		cnpj: pessoa.cnpj, 
		telefone: pessoa.telefone})
}

export async function modificaUsuario(usuario) {
    await updateDoc(doc(db, "guilhermefran8@gmail.com", usuario.key), 
        {name: usuario.name,
        email: usuario.email, 
		plano: usuario.plano, 
		tel: usuario.tel,})
}
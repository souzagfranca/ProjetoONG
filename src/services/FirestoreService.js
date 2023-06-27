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

export async function insereProduto(produto, userEmail) {
    try {
        const docRef = await addDoc(collection(db, userEmail), produto)
            .then((docRef) => {
                console.log('Cadastro realizado com sucesso!', docRef.id)
            })

    } catch (error) {
        console.error('Erro ao cadastrar produto.', error)
    }
}

export async function inserePessoa(pessoa, userEmail) {
    try {
        const docRef = await addDoc(collection(db, userEmail), pessoa)
            .then((docRef) => {
                console.log('Cadastro realizado com sucesso!', docRef.id)
            })

    } catch (error) {
        console.error('Erro ao cadastrar fornecedor.', error)
    }
}

export async function listarDadosUsuario(userEmail) {
    const dadosUsuario = []
    const response = await getDocs(
        query(
            collection(db, userEmail),
            where("tipo", '==', 'usuario')
        )
    )
    response.forEach((doc) => {
        dadosUsuario.push({ key: doc.id, ...doc.data() })
    })
    console.log(dadosUsuario)
    return dadosUsuario
}

export async function listarProdutos(userEmail) {
    const dadosProdutos = []
    //console.log(dadosProdutos)
    const response = await getDocs(
        query(
            collection(db, userEmail),
            where("tipo", '==', 'produto')
        )
    )
    response.forEach((doc) => {
        dadosProdutos.push({ key: doc.id, ...doc.data() })
    })
    return dadosProdutos
}

export async function listarPessoa(userEmail) {
    const dadosPessoa = []
    const response = await getDocs(
        query(
            collection(db, userEmail),
            where("tipo", '==', 'pessoa')
        )
    )
    response.forEach((doc) => {
        dadosPessoa.push({ key: doc.id, ...doc.data() })
    })
    return dadosPessoa
}

export async function listarFornecedores(userEmail) {
    const dadosPessoa = []
    const response = await getDocs(
        query(
            collection(db, userEmail),
            where("tipo", '==', 'pessoa')
        )
    )
    response.forEach((doc) => {
        dadosPessoa.push({ key: doc.id, ...doc.data() })
    })
    return dadosPessoa
}

export async function removeProduto(key, userEmail) {
    await deleteDoc(doc(db, userEmail, key))
}

export async function removePessoa(key, userEmail) {
    await deleteDoc(doc(db, userEmail, key))
}

export async function modificaProduto(produto, userEmail) {
    await updateDoc(doc(db, userEmail, produto.key), 
        {name: produto.name, 
		marca: produto.marca, 
		quantidade: produto.quantidade, 
		valorcusto: produto.valorcusto, 
		valorvenda: produto.valorvenda})
}

export async function modificaPessoa(pessoa, userEmail) {
    await updateDoc(doc(db, userEmail, pessoa.key), 
        {nome: pessoa.nome, 
		cpf: pessoa.cpf, 
		empresa: pessoa.empresa, 
		cnpj: pessoa.cnpj, 
		telefone: pessoa.telefone})
}

export async function modificaUsuario(usuario, userEmail) {
    await updateDoc(doc(db, userEmail, usuario.key), 
        {name: usuario.name,
        email: usuario.email, 
		plano: usuario.plano, 
		tel: usuario.tel})
}
import { getFirestore, collection, addDoc, getDocs, query, where, doc } from 'firebase/firestore'
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
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { app } from './FirebaseConfig'

const db = getFirestore(app)    

export async function insereCadastro(usuario) {
    //console.log(usuario)
    try {
        const docRef = await addDoc(collection(db, 'tb_usuario'), usuario)
            .then((docRef) => {
                console.log('Cadastro realizado com sucesso!', docRef.id)
            })

    } catch (error) {
        console.error('Erro ao cadastrar usuário.', error)
    }
}
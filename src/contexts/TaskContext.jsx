import { createContext, useState } from "react";
import { insereCadastro } from "../services/FirestoreService";

const TaskContext = createContext({
    insereCadastro: () => { },
})

export function TaskContextProvider(props) {
    const [novoCadastro, setNovoCadastro] = useState([])
   
    async function inserir(usuario){
            try {
                await insereCadastro(usuario)
                setNovoCadastro([...novoCadastro, usuario])
            } catch (error) {
                throw Error(error.message)
            }
    }

    const contexto = {
        insereCadastro: inserir,
    }

    return (
        <TaskContext.Provider value={contexto}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext
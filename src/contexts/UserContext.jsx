import { createContext, useState } from "react";
import { Login, Logout, criarLogin } from "../services/AuthService";
import { set } from "react-hook-form";

const UserContext = createContext({
    userID: null,
    logado: false,
    handleLogin: () => { },
    handleLogout: () => { },
    criarLogin: () => { },
})

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({
        userID: null,
        logado: false,
    })

    async function handleLogin(email, senha) {
        try {
            const id = await Login(email, senha)
            setCurrentUser({ userID: email, logado: true })
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function cadastrarUsuario(email, senha) {
        try {
            const id = await criarLogin(email, senha)
            setCurrentUser({ userID: email, logado: true })
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function handleLogout() {
        await Logout()
        setCurrentUser({ userID: null, logado: false })
    }

    const contexto = {
        userID: currentUser.userID,
        logado: currentUser.logado,
        handleLogin,
        handleLogout,
        criarLogin: cadastrarUsuario,
    }
    return (
        <UserContext.Provider value={contexto}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext
import { createContext, useState } from "react";
import { Login, Logout, criarLogin } from "../services/AuthService";
import { set } from "react-hook-form";

const UserContext = createContext({
    userID: null,
    userName: null,
    userEmail: null,
    userDDD: 0,
    userTel: 0,
    userPlano: null,
    logado: true,
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
            setCurrentUser({ userID: id, logado: true })
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function cadastrarUsuario(email, senha) {
        try {
            const id = await criarLogin(email, senha)
            setCurrentUser({ userID: id, logado: true })
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function handleLogout() {
        await Logout()
        setCurrentUser({ userID: null, logado: false })
    }

    function login(data) {
        console.log(data.name)
        setCurrentUser({
            userID: 1,
            userName: data.name,
            userEmail: data.email,
            userDDD: data.ddd,
            userTel: data.tel,
            userPlano: data.plano,
            logado: true
        })
    }

    function logout() {
        setCurrentUser({
            userID: null,
            userName: null,
            userEmail: null,
            userDDD: null,
            userTel: null,
            userPlano: null,
            logado: false
        })
    }

    const contexto = {
        userID: currentUser.userID,
        userName: currentUser.userName,
        userEmail: currentUser.userEmail,
        userDDD: currentUser.userDDD,
        userTel: currentUser.userTel,
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
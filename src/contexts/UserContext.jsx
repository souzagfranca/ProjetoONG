import { createContext, useState } from "react";

const UserContext = createContext({
    userID: 100,
    userName: null,
    userEmail: null,
    userDDD: 0,
    userTel: 0,
    userPlano: null,
    logado: true,
    handleLogin: () => { },
    handleLogout: () => { }
})

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({
        userID: null,
        logado: false,
    })

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
        handleLogin: login,
        handleLogout: logout
    }
    return (
        <UserContext.Provider value={contexto}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext
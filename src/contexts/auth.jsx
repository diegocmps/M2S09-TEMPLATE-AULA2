// contexts/auth.jsx

import { useState } from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: (data) => {},
    signOut: () => {}
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    function signIn(data) {
        if(data.email !== "teste@lab.com.br" && data.password !== "123"){
            throw new Error('Email/Senha inválida.')
        }

        setUser({
            id: Date.now(),
            first_name: 'Nicholas',
            email: data.email,
        })
    }

    function signOut() {
        setUser(null)
    }

    return <AuthContext.Provider value={{ signIn, signOut, user }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}

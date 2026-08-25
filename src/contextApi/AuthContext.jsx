import React from 'react'

export const authContextProvider = React.createContext()

export default function AuthContext({children}) {

    const [user, setUser] = React.useState("null")

    function login(name, username, password){
        setUser({
            name,
            username,
            password
        })
    }

  return (
    <authContextProvider.Provider value={{user, login}}>
        {children}
    </authContextProvider.Provider>
  )
}
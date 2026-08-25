import React from 'react'
import {authContextProvider} from '../contextApi/authContext'

export default function Login() {
    const {user, login} = React.useContext(authContextProvider)
    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
    <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={()=>{
            console.log("data:", user)
            login(name, username, password)
        }}>submit</button>
    </div>
  )
}
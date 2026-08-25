import React from 'react'
import {authContextProvider} from '../contextApi/authContext'

export default function Home() {
    const {user} = React.useContext(authContextProvider)
  return (
    <div>
        data : {user ? user.name : "Not logged in"}
        
    </div>
  )
}

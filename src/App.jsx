import React from 'react'
import AuthContext, {authContextProvider} from './contextApi/authContext'
import './App.css'
import Home from './Component/Home'
import Login from './Component/login'

function AppContent() {
  const { user } = React.useContext(authContextProvider)

  return user ? <Home /> : <Login />
}

function App() {
  return (
    <AuthContext>
      <AppContent />
    </AuthContext>
  )
}

export default App
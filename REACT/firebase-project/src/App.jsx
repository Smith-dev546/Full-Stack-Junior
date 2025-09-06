import LoginComponent from './views/login/LoginComponent'
import RegisterComponent from './views/register/RegisterComponent'
import Dashboard from './views/dashboard/Dashboard'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './repositories/firebase/config'
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="bg-dark text-light min-vh-100">
        <Routes>
          <Route 
            path="/register" 
            element={!user ? <RegisterComponent /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/login" 
            element={!user ? <LoginComponent /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard/*" 
            element={user ? <Dashboard /> : <Navigate to="/register" />} 
          />
          <Route 
            path="/" 
            element={<Navigate to={user ? "/dashboard" : "/register"} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
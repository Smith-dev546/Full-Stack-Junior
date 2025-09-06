import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../repositories/firebase/config'

const LoginComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/dashboard')
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
            if (error.code === 'auth/invalid-credential') {
                setError('Credenciales incorrectas. Por favor, verifica tu email y contraseña.')
            } else if (error.code === 'auth/user-not-found') {
                setError('No existe una cuenta con este email.')
            } else {
                setError('Error al iniciar sesión. Intenta nuevamente.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card bg-secondary border-light">
                        <div className="card-body p-4">
                            <h3 className="card-title text-center mb-4 text-light">Iniciar Sesión</h3>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-light">Email</label>
                                    <input
                                        type="email"
                                        className="form-control bg-dark text-light border-dark"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                        placeholder="Ingresa tu email"
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label text-light">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control bg-dark text-light border-dark"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                        placeholder="Ingresa tu contraseña"
                                    />
                                </div>
                                
                                <div className="d-grid mb-3">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                                    </button>
                                </div>
                                
                                <div className="text-center">
                                    <span className="text-light">¿No tienes cuenta? </span>
                                    <Link to="/register" className="text-primary text-decoration-none">
                                        Regístrate aquí
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
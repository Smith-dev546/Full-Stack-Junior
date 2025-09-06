import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../repositories/firebase/config'

const RegisterComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        
        // Validaciones
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden')
            setLoading(false)
            return
        }

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres')
            setLoading(false)
            return
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/login')
        } catch (error) {
            console.error('Error al registrar:', error)
            if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico ya está en uso')
            } else if (error.code === 'auth/invalid-email') {
                setError('El correo electrónico no es válido')
            } else {
                setError('Error al crear la cuenta. Intenta nuevamente.')
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
                            <h3 className="card-title text-center mb-4 text-light">Crear Cuenta</h3>
                            
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
                                
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-light">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control bg-dark text-light border-dark"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                        placeholder="Mínimo 6 caracteres"
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label text-light">Confirmar Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control bg-dark text-light border-dark"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                        placeholder="Repite tu contraseña"
                                    />
                                </div>
                                
                                <div className="d-grid mb-3">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
                                    </button>
                                </div>
                                
                                <div className="text-center">
                                    <span className="text-light">¿Ya tienes cuenta? </span>
                                    <Link to="/login" className="text-primary text-decoration-none">
                                        Inicia sesión aquí
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

export default RegisterComponent
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../repositories/firebase/config'
import { useForm } from 'react-hook-form'

const LoginComponent = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            navigate('/dashboard')
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
            if (error.code === 'auth/invalid-credential') {
                setError('root', { 
                    type: 'manual', 
                    message: 'Credenciales incorrectas. Por favor, verifica tu email y contraseña.' 
                })
            } else if (error.code === 'auth/user-not-found') {
                setError('root', { 
                    type: 'manual', 
                    message: 'No existe una cuenta con este email.' 
                })
            } else {
                setError('root', { 
                    type: 'manual', 
                    message: 'Error al iniciar sesión. Intenta nuevamente.' 
                })
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
                            
                            {errors.root && (
                                <div className="alert alert-danger" role="alert">
                                    {errors.root.message}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-light">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control bg-dark text-light border-dark ${
                                            errors.email ? 'is-invalid' : ''
                                        }`}
                                        id="email"
                                        disabled={loading}
                                        placeholder="Ingresa tu email"
                                        {...register('email', {
                                            required: 'El email es requerido',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Email no válido'
                                            }
                                        })}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback d-block">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label text-light">Contraseña</label>
                                    <input
                                        type="password"
                                        className={`form-control bg-dark text-light border-dark ${
                                            errors.password ? 'is-invalid' : ''
                                        }`}
                                        id="password"
                                        disabled={loading}
                                        placeholder="Ingresa tu contraseña"
                                        {...register('password', {
                                            required: 'La contraseña es requerida'
                                        })}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback d-block">
                                            {errors.password.message}
                                        </div>
                                    )}
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
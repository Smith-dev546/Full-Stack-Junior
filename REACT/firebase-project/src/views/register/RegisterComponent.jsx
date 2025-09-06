import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../repositories/firebase/config'
import { useForm } from 'react-hook-form'

const RegisterComponent = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setError
    } = useForm()

    const password = watch('password')

    const onSubmit = async (data) => {
        setLoading(true)
        
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            navigate('/login')
        } catch (error) {
            console.error('Error al registrar:', error)
            if (error.code === 'auth/email-already-in-use') {
                setError('root', { 
                    type: 'manual', 
                    message: 'El correo electrónico ya está en uso' 
                })
            } else if (error.code === 'auth/invalid-email') {
                setError('root', { 
                    type: 'manual', 
                    message: 'El correo electrónico no es válido' 
                })
            } else {
                setError('root', { 
                    type: 'manual', 
                    message: 'Error al crear la cuenta. Intenta nuevamente.' 
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
                            <h3 className="card-title text-center mb-4 text-light">Crear Cuenta</h3>
                            
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
                                
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-light">Contraseña</label>
                                    <input
                                        type="password"
                                        className={`form-control bg-dark text-light border-dark ${
                                            errors.password ? 'is-invalid' : ''
                                        }`}
                                        id="password"
                                        disabled={loading}
                                        placeholder="Mínimo 6 caracteres"
                                        {...register('password', {
                                            required: 'La contraseña es requerida',
                                            minLength: {
                                                value: 6,
                                                message: 'La contraseña debe tener al menos 6 caracteres'
                                            }
                                        })}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback d-block">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label text-light">Confirmar Contraseña</label>
                                    <input
                                        type="password"
                                        className={`form-control bg-dark text-light border-dark ${
                                            errors.confirmPassword ? 'is-invalid' : ''
                                        }`}
                                        id="confirmPassword"
                                        disabled={loading}
                                        placeholder="Repite tu contraseña"
                                        {...register('confirmPassword', {
                                            required: 'Debes confirmar la contraseña',
                                            validate: value => 
                                                value === password || 'Las contraseñas no coinciden'
                                        })}
                                    />
                                    {errors.confirmPassword && (
                                        <div className="invalid-feedback d-block">
                                            {errors.confirmPassword.message}
                                        </div>
                                    )}
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
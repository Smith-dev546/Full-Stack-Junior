import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../repositories/firebase/config'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        setMessage('')

        try {
            await addDoc(collection(db, "products"), {
                name: data.name,
                price: parseFloat(data.price),
                stock: parseInt(data.stock),
                createdAt: new Date()
            })
            
            setMessage('✅ Producto agregado correctamente!')
            reset()
        } catch (error) {
            console.error("Error adding product: ", error)
            setMessage('❌ Error al agregar el producto')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-light">Agregar Nuevo Producto</h2>
            
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card bg-secondary border-light">
                        <div className="card-header bg-black text-light">
                            <h4 className="mb-0">📝 Formulario de Producto</h4>
                        </div>
                        <div className="card-body">
                            {message && (
                                <div className={`alert ${message.includes('❌') ? 'alert-danger' : 'alert-success'}`}>
                                    {message}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-light">Nombre del Producto</label>
                                    <input
                                        type="text"
                                        className={`form-control bg-dark text-light border-dark ${
                                            errors.name ? 'is-invalid' : ''
                                        }`}
                                        id="name"
                                        disabled={loading}
                                        placeholder="Ej: Laptop Gamer"
                                        {...register('name', {
                                            required: 'El nombre del producto es requerido',
                                            minLength: {
                                                value: 2,
                                                message: 'El nombre debe tener al menos 2 caracteres'
                                            }
                                        })}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback d-block">
                                            {errors.name.message}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label text-light">Precio ($)</label>
                                    <input
                                        type="number"
                                        className={`form-control bg-dark text-light border-dark ${
                                            errors.price ? 'is-invalid' : ''
                                        }`}
                                        id="price"
                                        disabled={loading}
                                        placeholder="0.00"
                                        step="0.01"
                                        min="0"
                                        {...register('price', {
                                            required: 'El precio es requerido',
                                            min: {
                                                value: 0.01,
                                                message: 'El precio debe ser mayor a 0'
                                            },
                                            valueAsNumber: true
                                        })}
                                    />
                                    {errors.price && (
                                        <div className="invalid-feedback d-block">
                                            {errors.price.message}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="stock" className="form-label text-light">Stock</label>
                                    <input
                                        type="number"
                                        className={`form-control bg-dark text-light border-dark ${
                                            errors.stock ? 'is-invalid' : ''
                                        }`}
                                        id="stock"
                                        disabled={loading}
                                        placeholder="0"
                                        min="0"
                                        {...register('stock', {
                                            required: 'El stock es requerido',
                                            min: {
                                                value: 0,
                                                message: 'El stock no puede ser negativo'
                                            },
                                            valueAsNumber: true
                                        })}
                                    />
                                    {errors.stock && (
                                        <div className="invalid-feedback d-block">
                                            {errors.stock.message}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="d-grid">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? '⏳ Agregando...' : '➕ Agregar Producto'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
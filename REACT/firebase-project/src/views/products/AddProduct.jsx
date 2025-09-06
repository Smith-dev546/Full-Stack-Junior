import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../repositories/firebase/config'

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: 0,
        stock: 0
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleAddProduct = async (e) => {
        e.preventDefault()
        if (!newProduct.name || newProduct.price <= 0 || newProduct.stock < 0) {
            setMessage('Por favor, completa todos los campos correctamente')
            return
        }

        setLoading(true)
        setMessage('')

        try {
            await addDoc(collection(db, "products"), {
                name: newProduct.name,
                price: parseFloat(newProduct.price),
                stock: parseInt(newProduct.stock),
                createdAt: new Date()
            })
            
            setMessage('✅ Producto agregado correctamente!')
            setNewProduct({ name: '', price: 0, stock: 0 })
        } catch (error) {
            console.error("Error adding product: ", error)
            setMessage('❌ Error al agregar el producto')
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewProduct({
            ...newProduct,
            [name]: value
        })
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
                            
                            <form onSubmit={handleAddProduct}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-light">Nombre del Producto</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light border-dark"
                                        id="name"
                                        name="name"
                                        value={newProduct.name}
                                        onChange={handleInputChange}
                                        required
                                        disabled={loading}
                                        placeholder="Ej: Laptop Gamer"
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label text-light">Precio ($)</label>
                                    <input
                                        type="number"
                                        className="form-control bg-dark text-light border-dark"
                                        id="price"
                                        name="price"
                                        value={newProduct.price}
                                        onChange={handleInputChange}
                                        min="0"
                                        step="0.01"
                                        required
                                        disabled={loading}
                                        placeholder="0.00"
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="stock" className="form-label text-light">Stock</label>
                                    <input
                                        type="number"
                                        className="form-control bg-dark text-light border-dark"
                                        id="stock"
                                        name="stock"
                                        value={newProduct.stock}
                                        onChange={handleInputChange}
                                        min="0"
                                        required
                                        disabled={loading}
                                        placeholder="0"
                                    />
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
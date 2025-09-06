import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../repositories/firebase/config'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "products"))
            const productsData = []
            
            querySnapshot.forEach((doc) => {
                productsData.push({ id: doc.id, ...doc.data() })
            })
            
            setProducts(productsData)
        } catch (error) {
            console.error("Error fetching products: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-light">📦 Lista de Productos</h2>
            
            <div className="card bg-secondary border-light">
                <div className="card-header bg-black text-light d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Productos Registrados</h4>
                    <button 
                        className="btn btn-sm btn-outline-light"
                        onClick={getProducts}
                        disabled={loading}
                    >
                        🔄 Actualizar
                    </button>
                </div>
                
                <div className="card-body">
                    {loading ? (
                        <div className="text-center py-4">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                            <p className="mt-2 text-light">Cargando productos...</p>
                        </div>
                    ) : products.length === 0 ? (
                        <p className="text-center text-light py-4">No hay productos registrados.</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-dark table-striped table-hover">
                                <thead className="bg-black">
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Stock</th>
                                        <th>ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="fw-bold">{product.name}</td>
                                            <td>${product.price}</td>
                                            <td>
                                                <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                                                    {product.stock}
                                                </span>
                                            </td>
                                            <td className="text-muted small">{product.id.substring(0, 8)}...</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductList
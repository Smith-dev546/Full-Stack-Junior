import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router'
import AddProduct from '../products/AddProduct'
import ProductList from '../products/ProductList'
import { signOut } from 'firebase/auth'
import { auth } from '../../repositories/firebase/config'

const Dashboard = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await signOut(auth)
            navigate('/login')
        } catch (error) {
            console.error('Error al cerrar sesión:', error)
        }
    }

    return (
        <div className="container-fluid bg-dark">
            {/* Navbar con tema oscuro */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container">
                    <span className="navbar-brand fw-bold">🛍️ Sistema de Productos</span>
                    
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/dashboard/add-product"
                                >
                                    ➕ Agregar Producto
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/dashboard/product-list"
                                >
                                    📦 Ver Productos
                                </Link>
                            </li>
                        </ul>
                        
                        <button 
                            className="btn btn-outline-danger" 
                            onClick={handleLogout}
                        >
                            🚪 Cerrar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            {/* Contenido */}
            <div className="container mt-4">
                <Routes>
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="product-list" element={<ProductList />} />
                    <Route path="/" element={
                        <div className="text-center mt-5 p-4 bg-secondary rounded">
                            <h2 className="text-light">Bienvenido al Sistema de Gestión de Productos</h2>
                            <p className="text-light opacity-75">
                                Selecciona una opción del menú para comenzar a gestionar tus productos.
                            </p>
                            <div className="mt-4">
                                <Link to="/dashboard/add-product" className="btn btn-primary me-2">
                                    ➕ Agregar Producto
                                </Link>
                                <Link to="/dashboard/product-list" className="btn btn-outline-light">
                                    📦 Ver Productos
                                </Link>
                            </div>
                        </div>
                    } />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard
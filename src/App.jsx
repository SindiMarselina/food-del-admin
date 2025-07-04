import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminRegister from './pages/Admin/AdminRegister';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminForgotPassword from './pages/Admin/AdminForgotPassword';
import AdminResetPassword from './pages/Admin/AdminResetPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';

const App = () => {

  const url = "http://localhost:4000"
  const location = useLocation(); // ✅ Pindahkan ke sini!
  const authPaths = [
    "/admin/login",
    "/admin/register",
    "/admin/forgot-password",
    "/admin/reset-password",
  ];

  return (
    <div>
      <ToastContainer/>
      {/* Hanya tampilkan Navbar kalau bukan halaman Auth */}
      {!authPaths.includes(location.pathname) && <Navbar/>}
      <hr/>
      <div className="app-content">
        {/* Hanya tampilkan Sidebar kalau bukan halaman Auth */}
        {!authPaths.includes(location.pathname) && <Sidebar/>}
        <Routes>
          <Route path="/" element={<Navigate to="/orders" />} />
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/> }/>

          {/* Auth Admin */}
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
          <Route path="/admin/reset-password/:token" element={<AdminResetPassword />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate()

  const handleProfileClick = () => {
    setOpenMenu(!openMenu)
  }

  const handleRegister = () => {
    navigate('/admin/register')
    setOpenMenu(false)
  }

  const handleLogin = () => {
    navigate('/admin/login')
    setOpenMenu(false)
  }

  // const handleForgotPassword = () => {
  //   navigate('/admin/forgot-password')
  //   setOpenMenu(false)
  // }

  // const handleResetPassword = () => {
  //   navigate('/admin/reset-password') // kalau reset pakai token, biasanya di URL
  //   setOpenMenu(false)
  // }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    alert('Logout berhasil')
    navigate('/admin/login') // pastikan path-nya benar!
    setOpenMenu(false)
  }


  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <div className='profile-container'>
        <img
          className='profile'
          src={assets.profile_image}
          alt="Profile"
          onClick={handleProfileClick}
        />
        {openMenu && (
          <div className='dropdown-menu'>
            <button onClick={handleRegister}>Register Admin</button>
            <button onClick={handleLogin}>Login Admin</button>
            {/* <button onClick={handleForgotPassword}>Forgot Password</button>
            <button onClick={handleResetPassword}>Reset Password</button> */}
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

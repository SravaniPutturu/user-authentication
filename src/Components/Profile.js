import React from 'react'
import {useNavigate} from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()
  const userStr = localStorage.getItem('user')
  const user = JSON.parse(userStr)
  console.log(user)

  const {fullname,email,password} = user

  function logout(){
    localStorage.setItem('user',"")
    setTimeout(()=>{
      navigate('/')
    },2000)
  }
  
  return (
    <form>
      <h1>Profile</h1>
      <p>Full Name : <span>{fullname}</span></p>
      <p>Email: <span>{email}</span></p>
      <p>Password : <span>{password}</span></p>
      <button className='btn' onClick={logout}>Logout</button>
    </form>
  )
}

export default Profile

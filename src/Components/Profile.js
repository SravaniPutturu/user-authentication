import React from 'react'

const Profile = () => {

  const userStr = localStorage.getItem('user')
  const user = JSON.parse(userStr)
  console.log(user)

  const {fullname,email,password} = user

  function logout(){
    localStorage.setItem('user',"")
    setTimeout(()=>{
      window.location.href = '../profile';
    },5)
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

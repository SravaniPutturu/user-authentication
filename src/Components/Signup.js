

import React, { useState } from 'react';


const Signup = () => {

  const generateAccessToken = () => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 16;
    let accessToken = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      accessToken += characters.charAt(randomIndex);
    }
    return accessToken;
  };

  const token = generateAccessToken();

  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    token: ''
  });
  const [isEmpty,setIsEmpty] = useState(0)

  function handleForm(e) {

    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));    
  }

  function handleBtn(e) {
    
    e.preventDefault();
    setUser((prevState) => ({
      ...prevState,
      token: token,
    }));
    const empty = Object.values(user).some(value => value === '') ? -1 : 1
    if(empty){
      setIsEmpty(empty)
    }
    if(user.password !== user.confirmpassword){
      alert("Your password and confirrm password are not same please check")
    }
    if(empty === 1){
      setTimeout(()=>{
        window.location.href = 'https://sravaniputturu.github.io/profile';
      },5)
    }
  }

  localStorage.setItem('user',JSON.stringify(user))



  return (
    <form>
      <h1>Signup</h1>
      <input
        type='text'
        placeholder='Full Name'
        name='fullname'
        value={user.fullname}
        onChange={handleForm}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={user.email}
        onChange={handleForm}
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={user.password}
        onChange={handleForm}
      />
      <input
        type='password'
        placeholder='Confirm Password'
        name='confirmpassword'
        value={user.confirmpassword}
        onChange={handleForm}
      />
      {isEmpty === -1 && <p style={{'color' : 'red'}}>All the fields are mandatory</p>}
      {isEmpty === 1 && <p style={{'color' : 'green'}}>Successfully Signed Up</p>}

      <button  className='btn' onClick={handleBtn}>
        Signup
      </button>
    </form>
  );
};

export default Signup;

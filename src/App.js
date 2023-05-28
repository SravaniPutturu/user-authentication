import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route,useNavigate} from 'react-router-dom'
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate()
  const [pageLoad,setPageLoad] = useState(true)
  function toPageLoad() {
    navigate('/')
  }
  useEffect(()=>{
    toPageLoad()
    setPageLoad(false)
  },[])
  return (
    <div>
      <Navbar/>
      {pageLoad && <Signup/>}
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default App;

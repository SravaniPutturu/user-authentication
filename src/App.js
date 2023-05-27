import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Profile from './Components/Profile';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default App;

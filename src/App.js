import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log("Hello is App")
  
  return (
    <div className='h-screen w-[100vw] bg-[#010203] flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} ></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;

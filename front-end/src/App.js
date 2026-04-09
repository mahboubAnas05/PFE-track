import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Footer from './components/footer';
import SignUp from './pages/signUp';

function App() {
  return (
    <BrowserRouter>
          <div className=''>
            <header className='fixed-top' style={{'backgroundColor' : '#002457'}}>
              <Navbar/>
            </header>

            <main>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/login' element={<Login/>} />
                  <Route path='/signUP' element={<SignUp/>} />
              </Routes>
            </main>

            <footer style={{'marginTop' : '8%'}}>
                <Footer/>
            </footer>

          </div>
    </BrowserRouter>
  );
}

export default App;

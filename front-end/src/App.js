import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import LivrableIndex from './pages/LivrablesIndex';
import AddLivrable from './pages/LivrablesAdd';
import ShowLivrabl from './pages/livrableShow';
import IndexProjets from './pages/projetsIndex';
import AddProjet from './pages/projetAdd';
import SignUp from './pages/signUp';
import Login from './pages/login';
import Footer from './components/footer';

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
                  <Route path='/livrablesIndex' element={<LivrableIndex/>} />
                  <Route path='/livrableAdd' element={<AddLivrable/>}/>
                  <Route path='/showLiv' element={<ShowLivrabl/>} />
                  <Route path='/projetsIndex' element={<IndexProjets/>}/>
                  <Route path='/projetAdd' element={<AddProjet/>} />
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

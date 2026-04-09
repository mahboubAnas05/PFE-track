import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
          <div className=''>
            <header className='fixed-top' style={{'backgroundColor' : '#002457'}}>
              <Navbar/>
            </header>

            <main style={{'marginTop' : '16%'}}>
              <Routes>
                  <Route path='/' element={<Home/>}/>
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

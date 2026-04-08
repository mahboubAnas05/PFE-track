import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
          <div className='mx-3'>
            <header>
                <Navbar/>
            </header>

            <main>
              <Routes>
                  <Route path='/'/>
              </Routes>
            </main>

            <footer>

            </footer>

          </div>
    </BrowserRouter>
  );
}

export default App;

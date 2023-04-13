import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import Home from './pages/Home.js'
import Loreal from './pages/Loreal'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hyundai from './pages/Hyundai';
import CacauShow from './pages/CacauShow';
import CartaoMais from './pages/CartaoMais';
import GrupoMateus from './pages/GrupoMateus';
import Propay from './pages/Propay';

function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
      <Router>
        <Preloader load={load} />
        <div className="App container__master" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/loreal' element={<Loreal />}></Route>
            <Route path='/hyundai' element={<Hyundai />}></Route>
            <Route path='/cacau-show' element={<CacauShow />}></Route>
            <Route path='/cartao-mais' element={<CartaoMais />}></Route>
            <Route path='/grupo-mateus' element={<GrupoMateus />}></Route>
            <Route path='/propay' element={<Propay />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

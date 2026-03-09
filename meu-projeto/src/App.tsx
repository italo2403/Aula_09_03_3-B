  // src/App.jsx
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
  import Home from '../src/components/home'
  import Sobre from '../src/components/sobre'
  import Contato from '../src/components/Contato'
  import './assets/teste.css';
  
  export default function App() {
    return (
      <BrowserRouter>
       <nav className="cont">
         <Link to="/">Home</Link>  <Link to="/sobre">Sobre</Link>  <Link to="/contato">Contato</Link>
       </nav>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sobre" element={<Sobre />} />
         <Route path="/contato" element={<Contato />} />
       </Routes>
     </BrowserRouter>
   );
 }

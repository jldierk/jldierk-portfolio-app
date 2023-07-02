import logo from './logo.svg';
import './App.css';
import About from "./pages/about"
import Sample from "./pages/sample"
import Home from "./pages/home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import "./fonts/heyAugust.ttf"
import { Fade } from 'react-reveal';


function App() {
  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="sample" element={<Sample />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;

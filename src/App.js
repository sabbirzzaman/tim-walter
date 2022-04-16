import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About/About';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services/Services';
import './App.css';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="services" element={<Services></Services>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;

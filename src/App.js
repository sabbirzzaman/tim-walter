import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About/About';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services/Services';
import './App.css';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import Checkout from './pages/Checkout/Checkout/Checkout';
import RequiredAuth from './pages/Login/RequiredAuth/RequiredAuth';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="services" element={<Services></Services>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="signup" element={<SignUp></SignUp>}></Route>
                <Route
                    path="checkout/:serviceId"
                    element={
                        <RequiredAuth>
                            <Checkout></Checkout>
                        </RequiredAuth>
                    }
                ></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;

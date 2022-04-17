import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe/AboutMe';
import MyServices from './pages/MyServices/MyServices/MyServices';
import Checkout from './pages/Checkout/Checkout/Checkout';
import Header from './pages/Common/Header/Header';
import Footer from './pages/Common/Footer/Footer';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import RequiredAuth from './pages/Login/RequiredAuth/RequiredAuth';
import NotFounded from './pages/NotFounded/NotFounded';
import './App.css';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<AboutMe></AboutMe>}></Route>
                <Route path="services" element={<MyServices></MyServices>}></Route>
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
                <Route path='*' element={<NotFounded></NotFounded>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;

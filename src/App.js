import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Dwellings from './pages/dwellings/Dwellings';
import Registry from './pages/registry/Registry';
import Signout from './pages/sign out/Sign out';
import Dwelling from './pages/dwelling/Dwelling';

function App() {
    return (
        <Router>
        <div className='content'>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dwelling" element={<Dwellings />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registry" element={<Registry />} />
                    <Route path="/signout" element={<Signout />} />
                    <Route path="/dwelling/:dwellingID" element={<Dwelling />} />
                </Routes>
        </div>
        </Router>
    );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
    return (
        <>
        <Header />
        <Home />
        </>
    );
}

export default App;

import './App.css';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import BodyNews from "./components/BodyNews";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <BodyNews />
            <Footer />
        </div>
    );
}

export default App;

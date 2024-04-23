import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import RecentNews from "./components/RecentNews";

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <RecentNews />
        </div>
    );
}

export default App;

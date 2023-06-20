import logo from './logo.svg';
import './App.css';
import MyButton from './component/MyButton';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <SearchBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Halo ini yang mo pull Kelompok Oslo cuy
        </p>
        <MyButton />
        <Footer />
      </header>
    </div>
  );
}

export default App;

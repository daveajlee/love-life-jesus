import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Whatever from './pages/Whatever';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/whatever' element={<Whatever/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Subscribe from './pages/Subscribe';
import Fellowship from './pages/Fellowship';
import Episodes from './pages/Episodes';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-0" style={{ marginTop: 0 }}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/episodes' element={<Episodes/>} />
          <Route exact path='/subscribe' element={<Subscribe/>} />
          <Route exact path='/fellowship' element={<Fellowship/>} />
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

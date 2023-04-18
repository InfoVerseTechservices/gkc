import logo from './logo.svg';
import './App.scss';
import Home from './views/Home';
import { Routes , Route} from 'react-router-dom'
import About from './views/About';
import Service from './views/Service';
import GkcToken from './views/GkcToken';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/service' element={<Service/>} />
        <Route exact path='/gkc-token' element={<GkcToken/>} />

        </Routes>
    </div>
  );
}

export default App;

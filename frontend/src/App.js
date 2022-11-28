import './App.css';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/Hotel/Hotel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route  index element={<Home/>}/>
          <Route path='hotels' element={<List/>}/>
          <Route path='hotels/:id' element={<Hotel/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import List from './pages/list/List'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import { userInputs , productInputs } from './formSource';
import './style/dark.scss'
import { useContext } from 'react';
import {DarkModeContext} from './context/darkModeContext';

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <Router>
      <Routes>
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='users'>
              <Route index element={<List/>} /> 
              <Route path=':userId' element={<Single/>}/>
              <Route path='new' element={<New inputs={userInputs} title="Add New Product"/>}/>
            </Route>
            <Route path='products'>
              <Route index element={<List/>} /> 
              <Route path=':productId' element={<Single/>}/>
              <Route path='new' element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;

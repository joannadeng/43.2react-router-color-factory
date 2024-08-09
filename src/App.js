import logo from './logo.svg';
import './App.css';
// import Home from './Home';
// import Color from './Color';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
// import NewColorForm from './NewColorForm';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
    
  );
}

export default App;

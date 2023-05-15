import logo from './logo.svg';
import './App.css';
import Basics from './Components/Basics';
import StateBasics from './Components/StateBasics';
import TextBasics from './Components/TextBasics';
import Esytxt from './Components/Esytxt';
import TableArray from './Components/TableArray';
import Navigator from './Components/Navigator';
import { Route, Routes } from 'react-router-dom';
import ViewData from './Components/ViewData';

function App() {
  return (
    <div className="App">
     
     <Navigator/>
     <br/><br/>
     <br/><br/>
      <Routes>
        <Route path ='/' element={<StateBasics/>} />
        <Route path ='/table' element={<TableArray/>}  />
        <Route path ='/view' element={<ViewData/>} />
      </Routes>
    </div>
  );
}

export default App;

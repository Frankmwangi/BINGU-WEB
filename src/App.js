
import './App.css';
import SideMenu from './components/SideMenu.js';
import microphone from './assets/microphone.png';
import Meeting from './components/Meeting.js';
import Rooms from './components/Rooms.js';
import { Routes, Route } from 'react-router-dom';
import Component from './components/layout/sidebar.js';
import Home from './components/Home/home.js';


function App() {
  return (
    <div className="App relative h-screen overflow-hidden rounded-md font-antialised m-[0.5] ">
    {/* <SideMenu />
    <div className="main-content">
      
    </div> */}
    <Routes>
      <Route  element={<Component />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Rooms/>}/>
      </Route>
    </Routes>
  </div>
  );
}

export default App;

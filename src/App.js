
import './App.css';
import SideMenu from './components/SideMenu.js';
import microphone from './assets/microphone.png';
import Meeting from './components/Meeting.js';
import Rooms from './components/Rooms.js';


function App() {
  return (
    <div className="App">
    <SideMenu />
    <div className="main-content">
      <div className="main-title-group">
      <h1 className="heading-bingu">BINGU</h1>
      <img src={microphone} alt="microphone" className="microphone" />
      <div className="info-bingu">
        <p className="info-discover">DISCOVER YOUR FINANCIAL POTENTIAL</p>
        <p className="info-set">Set Up Audio Meetings.Both Public and Private</p>
      </div>
      </div>
      <Meeting/>
      <Rooms/>
    </div>
  </div>
  );
}

export default App;

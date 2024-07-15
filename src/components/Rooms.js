import React from 'react';
import './Rooms.css';


const Rooms = () => {
  return (
   <div className="rooms-group">
    <div className="public-room-group">
    <h4 className="text-public">Public Room</h4>
    <h5 className="text-info">This conference will be available to everyone</h5>
    <p className="text-choose">choose a name for the conference</p>
    <input type="text" id="name" name="name" placeholder=''className="input-choose" />
    <div  className="public-buttons">
    <button class="button-meeting" type="button">Join me</button>
    <button class="button-meeting" type="button">Join meeting</button>
    </div>
    </div>
    <div className="private-room-group">
        
    </div>
   </div>
      
   
  );
}

export default Rooms;
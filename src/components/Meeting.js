import React from 'react';
import './Meeting.css';

const Meeting = () => {
  return (
   <div className="meeting-group">
    <h3 className="meeting-text">Join Meeting</h3>
    <div className="input-group">
    <input type="text" id="name" name="name" placeholder='Enter meeting link'className="input-meeting" />
    <button class="button-meeting" type="button">Join meeting</button>
    </div>
   </div>
  );
}

export default Meeting;

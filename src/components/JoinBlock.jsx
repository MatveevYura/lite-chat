import axios from "axios";
import React, { useState } from "react";
import socket from '../socket'

function JoinBlock() {
  const [roomId, setRoomId] = React.useState('')
  const [userName, setUserName] = React.useState('')

  const onEnter = () => {
    if (!roomId || !userName) {
      return alert('Error')
    }
    axios.post('/rooms', {
      roomId,
      userName,
    })
  }

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={onEnter} className="btn btn-success">Start</button>
    </div>
  );

}

export default JoinBlock;

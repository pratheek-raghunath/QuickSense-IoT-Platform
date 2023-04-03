import {useState, useEffect, useContext} from 'react';
import socketContext from '../context/socket';

const Action = () => {
    const socket = useContext(socketContext)

    const onBuzzer = () => {
        console.log('buzzer')
        socket.emit('buzzer', 'toggle')
    }

    const onOpenDoor = () => {
        socket.emit('servo', 'toggle')
    }
    
    return (
      <div>
        <button onClick={onBuzzer}>Buzzer</button>
        <button onClick={onOpenDoor}>Open Door</button>
       </div>
    );
}

export default Action
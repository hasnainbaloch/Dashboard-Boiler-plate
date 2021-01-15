import React from 'react';
import { SocketContext } from '../../../context';
import './home.css';

function Home({socket}) {
    return (
        <div className="home">
            I am home! and {socket}
        </div>
    )
}

export default Home;

import React, { useEffect, useState } from 'react';
import './home.css';

function Home({socket}) {


    const [socketData, setData] = useState(null);

    useEffect(() => {
        socket.on('cnicRecord', (data) => {
            setData(data);
        });        
    }, []);

    return (
        <div className="home">
            I am home! and {socketData?.cnic}
        </div>
    )
}

export default Home;

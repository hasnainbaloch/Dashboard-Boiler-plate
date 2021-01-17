import React, { useEffect, useState } from 'react';
import './home.scss';

function Home({socket}) {


    const [socketData, setData] = useState([]);

    useEffect(() => {
        socket.on('cnicRecord', async (data) => {
            setData(prevData => [...prevData, data]);
        });        
    }, [socket]);

    return (
        <div className="home">
            I am home! and {socketData && socketData.map(cnic => (
                <p>CNIC: {cnic.cnic}</p>
            ))}
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <p>lorem </p>
            <hr/>
        </div>
    )
}

export default Home;

import React, { useEffect, useState } from 'react';

function Home({socket}) {


    const [socketData, setData] = useState([]);

    useEffect(() => {
        socket.on('cnicRecord', async (data) => {
            setData(prevData => [...prevData, data]);
        });        
    }, [socket]);

    return (
        <div className="home">
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

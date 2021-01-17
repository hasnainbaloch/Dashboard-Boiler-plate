import React, { useEffect, useState } from 'react';
import  {Title, Button } from '../../../style';

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
                <Title>CNIC: {cnic.cnic}</Title>
            ))}
            <Title>lorem </Title>
            <Button>lorem </Button>
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

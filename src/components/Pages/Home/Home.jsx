import React, { useEffect, useState } from 'react';
import  {Title, Title2, Button, Example } from '../../../style';

function Home({socket}) {


    const [socketData, setData] = useState([]);

    useEffect(() => {
        socket.on('cnicRecord', async (data) => {
            setData(prevData => [...prevData, data]);
        });        
    }, [socket]);

    return (
        <div className="home">
            <Title2>I am home! and {socketData && socketData.map(cnic => (
                <Title>CNIC: {cnic.cnic}</Title>
            ))}</Title2>
            <Title>lorem </Title>
            <Button>lorem </Button>
            <Example margin="10px">lorem Example</Example>
            <Title primary>lorem </Title>
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

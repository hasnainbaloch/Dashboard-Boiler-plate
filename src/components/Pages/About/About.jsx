import React from 'react'

function About({socket}) {
    return (
        <div>
            I am About! {socket.connected}!!
        </div>
    )
}

export default About;
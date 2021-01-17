import React from 'react';

import styled, {css} from 'styled-components';

const Button = styled.button`

    border: 1px solid #454545;
    background-color: crimson;
    color: white;
    box-shadow: 0 1px 5px 5px rgba(0,0,0,0.5);

`;

const Title = styled.h1`

    font-size: 20rem;
    color: crimson;
    padding: 20px;
    margin: 0;
`;



export {
    Button,
    Title
}
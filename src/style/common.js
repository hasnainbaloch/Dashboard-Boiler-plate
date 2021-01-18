import styled, { css } from 'styled-components';

export const  Button = styled.button`
    border: 1px solid #454545;
    background-color: crimson;
    color: white;
    padding: 10px;
    border-radius: 2px;
    width: 200px;
    font-size: 1.5rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    outline: none;
    &:hover{
        cursor: pointer;
        box-shadow: 0 4px 3px 3px rgba(21,23,34,0.2);
    }
`;

export const  Title = styled.h1`
    font-size: 15rem;
    color: crimson;
    padding: 20px;
    margin: 0;

    ${({ primary }) => primary && css`
        color: green;
    ` };
`;

export const  Title2 = styled.h2`
    font-size: 8rem;
    color: #454545;
    padding: 20px;
    margin: 0;
`;

export const  Example = styled.p`
    font-size: 2rem;
    color: #000000;
    margin: ${({margin}) => margin || `20px`};
`;


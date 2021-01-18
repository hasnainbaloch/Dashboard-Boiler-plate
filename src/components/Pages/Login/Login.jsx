import React, { useState } from 'react';
import {login} from '../../../utils';

import { useHistory } from "react-router-dom";
import { FormWrapper } from './login.style';
import { Button, Input } from '../../../style';


function Login() {
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const loginUser = (e) => {
        e.preventDefault();
        const isLogin = login(name, password);
        isLogin ? history.push('/dashboard') : history.push('/');  
    }

    return (
        <FormWrapper>
            <form>
                <label htmlFor="name">
                    <Input type="text" name="name" id="name" value={name} placeholder="type your name" onChange={(e) => setName(e.target.value)}/>
                </label>
                <br/>
                <label htmlFor="password">
                    <Input type="password" name="password" id="password" value={password} placeholder="type your password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <Button type="submit" onClick={(e) => loginUser(e)}>Login</Button>
            </form>
        </FormWrapper>
    )
}

export default Login;

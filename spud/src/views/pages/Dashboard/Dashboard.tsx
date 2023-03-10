import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './Styled';
import { RequestAuth } from '../../../store/Authentication/actions';
import Button from '../../../Components/Button/button.tsx';

const Dashboard: React.FunctionComponent = () => {

    const [ token, setToken ] = useState('');

    const auth_endpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
    const client_id = process.env.REACT_APP_SPUD_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const response_type = process.env.REACT_APP_RESPONSE_TYPE;

    const loginLink = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`;
    
    return (
        <Styled.DashboardContainer>
            Hello
            <Button>
                Wow
            </Button>
        </Styled.DashboardContainer>
        
    );
};

export default Dashboard;

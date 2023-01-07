import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './Styled';
import { RequestAuth } from '../../../store/Authentication/actions';

const Dashboard: React.FunctionComponent = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(RequestAuth({clientID: 'hello'}));
    }, [dispatch]);

    const client_id = process.env.REACT_APP_SPUD_CLIENT_ID;
    console.log(client_id);

    return (
        <Styled.DashboardContainer>
            Hello
        </Styled.DashboardContainer>
    );
};

export default Dashboard;

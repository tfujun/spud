import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './Styled';
import { RequestAuth } from '../../../store/Authentication/actions';
import Button from '../../../Components/Button/button';
import FlexBox from '../../../Components/FlexBox/flexBox';
import { Layout } from 'antd';

const { Header } = Layout;

const Dashboard: React.FC = () => {

    return (
        <Layout type='primary'>
            <Header type="primary">
                Header
            </Header>
        </Layout>
    );
};

export default Dashboard;

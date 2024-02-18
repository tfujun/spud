import { ConfigProvider } from 'antd';
import React from 'react';
import Dashboard from './views/pages/Dashboard/Dashboard';
import Router from './router/router';

const StyleConfig: React.FC = () => {

    return(
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ED4192',
            borderRadius: 16,
          }
        }}
      >
        <Router/>
      </ConfigProvider>
    );
};

export default StyleConfig;

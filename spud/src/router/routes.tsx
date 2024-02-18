/* eslint-disable */
import { RouteObject } from 'react-router-dom';
import * as RouteComponents from './routeComponents';

const buildRoute = (routePath: string, component: React.ReactElement): RouteObject => {
    return {
        path: routePath,
        element: component
    };
};

export const Routes = (): Array<RouteObject> => {
    return [
        buildRoute('/', <RouteComponents.Dashboard/>)
    ]
}

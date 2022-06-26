import {lazy} from 'react'
const Login = lazy(() => import('pages/Login'))
const Home = lazy(() => import('pages/Home'))


export const routes = [
    {
        path: "/", // the url
        component: Home, // view rendered
    },

    ]
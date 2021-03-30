const home_route = require('./pages/home/routes');
const route = [
    ...home_route,
]
const routes = [
    {
        exact: true,
        path: '/',
        redirect: '/qk-parta-home1'
    },
    {
        path: '/',
        component: '@/layouts/index',
        routes: route
    }
]
module.exports = routes;
import { defineConfig } from 'umi';
const routes = require('./src/routes')
export default defineConfig({
    mountElementId: `app-${process.env.npm_package_name}`,
    antd: {},
    dva: {
        immer: true,
    },
    dynamicImport: {},
    nodeModulesTransform: {
        type: 'none',
    },
    routes: routes,
    qiankun: {
        slave: {},
    },
});
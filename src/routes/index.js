import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const PortfolioView = () => import(/* webpackChunkName: "portfolio" */ '../views/PortfolioView.vue');
const DemoView = () => import(/* webpackChunkName: "demo" */ '../views/DemoView.vue');

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: 'home',
            // path: url에 대한 정보
            path: '/home',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: HomeView,
        },  
        {
            name: 'portfolio',
            path: '/portfolio',
            component: PortfolioView,
        },  
        {
            name: 'demo',
            path: '/demo',
            component: DemoView,
        },  
        {
            path: '/*',
            redirect: { name: 'home' }
        }
    ],
});
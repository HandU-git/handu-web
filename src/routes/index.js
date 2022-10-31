import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            // redirect: '/news',
        },
        {
            // path: url에 대한 정보
            path: '/news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            // component: NewsView,
        },
    ],
});
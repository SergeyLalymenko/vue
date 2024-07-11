import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { Vuelidate } from 'vuelidate';
import Todos from './components/Todos.vue';
import Edit from './components/Edit.vue';

Vue.config.productionTip = false

export const eventEmitter = new Vue();

Vue.use(Vuelidate);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: (h) => h(App),
    router: new VueRouter({
        routes: [
            {
                path: '/',
                component: Todos
            },
            {
                path: '/edit',
                component: Edit,
                children: [
                    {
                        path: ':id',
                        component: Edit
                    }
                ]
            }
        ],
        mode: 'history'
    })
})

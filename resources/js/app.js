require('./bootstrap');

// window.Vue = require('vue');

import Vue from 'vue';

import router from './components/router/index';
import store from './components/store/index';

import mainApp from './App.vue'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

require('./components/store/subscriber');

store.dispatch('auth/attempt', localStorage.getItem('token'))
    .then(() => {
        const app = new Vue({
            el: '#app',
            router,
            store,
            components: {
                mainApp
            }
        });
    })

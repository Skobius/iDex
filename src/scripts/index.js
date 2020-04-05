// libs
//-------------------------------------------------------
window.$ = window.jQuery = require('jquery');

import main from './components/main/index';
import App from './App.vue'
import Calendar from './Calendar.vue'

Vue.component("calendar", Calendar);

new Vue({
    el: '#app',
	render: h => h(App)
});

$(() => {
    main.init();
});

import '../styles/index.scss';

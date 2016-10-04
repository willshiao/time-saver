import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

let vue = new Vue({
  el: '#app',
  render: h => h(App)
});

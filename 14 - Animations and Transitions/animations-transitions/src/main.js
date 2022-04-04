import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'


import App from './App.vue'
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const app = createApp(App);


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: AllUsers},
		{path: '/goals', component: CourseGoals},
	],
});



app.use(router);
// Global components
app.component('base-modal', BaseModal);

// Remove initial transition after page loads first time and then render the app
router.isReady().then(function(){
	app.mount('#app');
});


import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', redirect: '/teams'},
		{
			name: 'teams',
			path: '/teams', 
			components: { default: TeamsList, footer: TeamsFooter },
			children: [
				{name:'team-members', path: ':teamId', component: TeamMembers, props: true}
			] 
		},	// domain.com/teams => TeamsList
		{
			path: '/users', 
			components: {default: UsersList, footer: UsersFooter},
			// single component navigation guard
			beforeEnter(to, from, next){
				console.log('user before enter');
				console.log(to, from);
				next();
			} 
		},
		// {path: '/teams/:teamId', component: TeamMembers, props: true},
		{path: '/:notFound(.*)', component: NotFound},
	],
	// Scrolling behavior of components
	scrollBehavior(to, from, savedPosition){
			console.log(to, from, savedPosition);
			if(savedPosition){
				return savedPosition;
			}
			return { left: 0, top: 0};
		},
});

// Navigation guards - useful in authentication users
router.beforeEach(function(to, from, next){
	console.log('global beforeeach');
	console.log(to, from);
	// approves navigation
	next();
	// discard navigation
	// next(false);
	//	navigate to a specific route
	// if(to.name === 'team-members'){
	// 	next();
	// }else{
	// 	next({name: 'team-members', params: {teamId: 't2' } });
	// }
});

// global after navigation occurs
router.afterEach(function(to, from){
	// sending analytics data
	console.log('Global after each');
	console.log(to, from);
})

const app = createApp(App);


app.use(router);
app.mount('#app');

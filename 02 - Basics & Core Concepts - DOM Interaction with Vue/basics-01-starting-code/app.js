const app = Vue.createApp({
	data(){
		return{
			courseGoalA: 'Learn vue and build apps!',
			courseGoalB: 'Master vue and learn laravel!',
			outputHtml: '<h3>This is a html code</h3>',
			vueLink: 'https://vuejs.org/'
		};
	},
	methods: {
		outputGoal(){
			const a = Math.random();
			if(a < .5){
				return this.courseGoalA;
			}else{
				return this.courseGoalB;
			}
		}
	}
});

 
app.mount('#user-goal');
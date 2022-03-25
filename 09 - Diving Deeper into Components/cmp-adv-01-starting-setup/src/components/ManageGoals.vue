<template>
	<h1>Manage Goals</h1>
	<input type="text" ref="goal"> 
	<button @click="setGoal">Set Goal</button>
	<!-- to set this markup to body tag from its current position -->
	<teleport to="body">
		<error-alert v-if="inputIsInvalid">
			<h2>Input is invalid</h2>
			<p>You have to provide any goal to proceed!</p>
			<button @click="clearError">Close</button>
		</error-alert>
	</teleport>
</template>


<script>
	import ErrorAlert from './ErrorAlert.vue';

	export default{
		components: {
			ErrorAlert,
		},
		data(){
			return {
				inputIsInvalid: false,
			};
		},
		methods: {
			setGoal(){
				if(this.$refs.goal.value === ''){
					this.inputIsInvalid = true;
				}
			},
			clearError(){
				this.inputIsInvalid = false;
			}
		}
	}
</script>
<template>
	<transition-group tag="ul" name="user-list">
		<li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
	</transition-group>
	<div>
		<input type="text" ref="userNameInput">
		<button @click="addUser">Add User</button>
	</div>
</template>



<script>
	export default{
		data() {
			return {
				users: ['Max', 'Julie', 'Manu', 'Angela', 'Micheal']
			}
		},
		methods: {
			addUser(){
				const enteredUserName = this.$refs.userNameInput.value;
				this.users.unshift(enteredUserName);
				// clear input field
				this.$refs.userNameInput.value = '';
			},
			removeUser(user){
				this.users = this.users.filter(usr => usr !== user);
			}
		}

	}
</script>


<style scoped>
	ul {
		list-style: none;
		margin: 1rem 0;
		padding: 0;
	}

	li{
		border: 1px solid #ccc;
		padding: 1rem;
		text-align: center;
	}

	input {
		height: 30px;
		margin-right: .75rem;
	}
/* animations on user-list transition */
	.user-list-enter-from{
		opacity: 0;
		transform: translateX(-30px);
	}
	.user-list-enter-active{
		transition: all 1s ease-out;
	}
	.user-list-enter-t0{
		opacity: 1;
		transform: translateX(0);
	}

	.user-list-leave-from{
		opacity: 1;
		transform: translateX(0);
	}
	.user-list-leave-active{
		transition: all 1s ease-in;
		position: absolute;
	}
	.user-list-leave-to{
		opacity: 0;
		transform: translateX(30px);
	}
	/* special class for other elements for moving */
	.user-list-move{
		transition: transform 0.8s ease;
	}
</style>
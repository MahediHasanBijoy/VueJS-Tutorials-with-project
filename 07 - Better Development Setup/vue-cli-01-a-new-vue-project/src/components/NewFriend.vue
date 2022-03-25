<template>
	<form action="" @submit.prevent="submitData">
		<div>
			<label for="">Name</label>
			<input type="text" v-model="enteredName">
		</div>
		<div>
			<label for="">Phone</label>
			<input type="text" v-model="enteredPhone">
		</div>
		<div>
			<label for="">Email</label>
			<input type="text" v-model="enteredEmail">
		</div>
		<div>
			<button>Add Contact</button>
		</div>
	</form>
</template>

<script>
	export default{
		emits: ['add-contact'],
		data(){
			return{
				enteredName: '',
				enteredPhone: '',
				enteredEmail: ''
			}
		},
		methods: {
			submitData(){
				this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
				// Clear input fields after submitting
				this.enteredName='';
				this.enteredPhone='';
				this.enteredEmail='';

			}
		}
	}

</script>
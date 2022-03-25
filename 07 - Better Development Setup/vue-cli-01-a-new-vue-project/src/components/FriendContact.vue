<template>
	<li>
		<h2>{{name}} {{isFavorite ? '(Favorite)' : ''}}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{phoneNumber}}</li>
			<li><strong>Email:</strong> {{emailAddress}}</li>
		</ul>
		<button @click="$emit('delete-friend',id)">Delete</button>
	</li>
</template>

<script>
	export default{
		// props: ['name','phoneNumber','emailAddress','isFavorite'],
		// props: {
		// 	name: String,
		// 	phoneNumber: String,
		// 	emailAddress: String,
		// 	isFavorite: String,
		// },
		props: {
			id: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			phoneNumber: {
				type: String,
				required: true
			},
			emailAddress: {
				type: String,
				required: true
			},
			isFavorite: {
				type: Boolean,
				required: false,
				default: false
			}
		},
		emits: ['toggle-favorite', 'delete-friend'],
		data(){
			return {
				detailsAreVisible: false,
				
				friendIsFavorite: this.isFavorite,
			}
		},
		methods: {
			toggleDetails(){
				this.detailsAreVisible = !this.detailsAreVisible;
			},
			toggleFavorite(){
				this.$emit('toggle-favorite', this.id);
			},

	}
};
</script>
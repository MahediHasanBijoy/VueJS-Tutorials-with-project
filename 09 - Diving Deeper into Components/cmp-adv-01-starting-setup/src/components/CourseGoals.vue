<template>
	<ul>
		<li v-for="goal in goals" :key="goal">
			<slot :item="goal" another-prop="hello"></slot>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return {
				goals: ['Finish the course', 'Learn vue'],
			}
		}
	}
</script>

<style scoped>
	ul{
		padding: 1rem;
		max-width: 30rem;
		margin: auto;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 5px;

	}

	li{

		margin-top: 10px;
	}
	
</style>
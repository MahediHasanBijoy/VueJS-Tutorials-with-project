<template>
	<base-card>
		<base-button @click="setSelectedTab('stored-resources')" :mode="storedResBtnMode">Stored Resources</base-button>
		<base-button @click="setSelectedTab('add-resource')" :mode="addResBtnMode">Add Resource</base-button>
	</base-card>
	<!-- to make the component cashed -->
	<keep-alive>
		<component :is="selectedTab"></component>
	</keep-alive>
</template>


<script>
	import StoredResources from './StoredResources.vue';
	import AddResource from './AddResource.vue';


	export default {
		components: {
			StoredResources,
			AddResource,
		},
		data(){
			return {
				selectedTab: 'stored-resources',
				storedResources: [
					{
						id: 'official-guide',
						title: 'Official Guide',
						description: 'The official Vue.js documentation',
						link: 'https://vuejs.org'

					},
					{
						id: 'google',
						title: 'Google',
						description: 'The ultimate learning resource',
						link: 'https://google.com'
					}
				],
			}
		},
		computed: {
			storedResBtnMode(){
				return this.selectedTab === 'stored-resources' ? null: 'flat';
			},
			addResBtnMode(){
				return this.selectedTab === 'add-resource' ? null : 'flat';
			}
		},
		provide(){
			return{
				resources: this.storedResources,
				addResource: this.addResource,
				removeResource: this.removeResource,
			}
		},
		methods:{
			setSelectedTab(tab){
				this.selectedTab = tab;
			},
			addResource(title, description, url){
				const newResource = {
					id: new Date().toISOString(),
					title: title,
					description: description,
					link: url
				};

				this.storedResources.unshift(newResource);
				this.selectedTab = 'stored-resources';
			},
			removeResource(resId){
				// here filter array method won't work because of provide injects behavior
				const resIndex = this.storedResources.findIndex(element=> element.id === resId);
				this.storedResources.splice(resIndex, 1);
			}
		}
	}
</script>
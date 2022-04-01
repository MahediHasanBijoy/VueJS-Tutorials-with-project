<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ....</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="(!results || results.length === 0) && !isLoading" >No stored experiences found. Please add some survey results.</p>

      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  
  components: {
    SurveyResult,
  },
  data(){
    return{
      results: [],
      isLoading: false,
      error: null,
    }
  }, 
  methods: {
    loadExperiences(){
      this.isLoading = true;
      this.error = null;
      fetch('https://vue-http-demo-1e3de-default-rtdb.firebaseio.com/surveys.json').then(res=>{
        if(res.ok){
          return res.json();
        }
      }).then(data=>{
        this.isLoading = false;
        const outputResults = [];
        for(const key in data){
          outputResults.push({
            id: key,
            name: data[key].name,
            rating: data[key].rating
          });

          this.results = outputResults;
        }
      }).catch((error)=>{
        this.isLoading = false;
        console.log(error);
        this.error = 'Error: Failed to fetch data. Please try again later.';
      });
    }
  },
  mounted(){
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
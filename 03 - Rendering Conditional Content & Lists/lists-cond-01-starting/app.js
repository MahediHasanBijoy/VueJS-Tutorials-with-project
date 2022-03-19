const app = Vue.createApp({
  data() {
    return { 
      enteredGoal: '',
      goals: []
       };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoal);

    },
    removeGoal(index){
      this.goals.splice(index,1);
    }
  },
  computed: {
    lengthZero(){
      if(this.goals.length === 0){
        return true;
      }else {
        return false;
      }
    }
  }
});

app.mount('#user-goals');

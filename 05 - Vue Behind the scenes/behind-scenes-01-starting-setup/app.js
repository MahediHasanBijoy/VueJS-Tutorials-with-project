const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },  // Vue lifecycle hooks
  beforeCreate(){
    console.log('before created');
  },
  mounted(){
    console.log('mounted');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('before mount');
  },
  beforeUpdate(){
    console.log('before update');
  },
  updated(){
    console.log('updated');
  },
  beforeUnmount(){
    console.log('before unmount');
  },
  unmounted(){
    console.log('unmounted');
  }

});

app.mount('#app');


setTimeout(function(){
  app.unmount();
}, 3000)
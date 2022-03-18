const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // fullname: '',
      confirmName: ''
    };
  },
  watch:{
    counter(value){
      if(value>10){
        this.counter = 0;
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname(){
      if(this.name === '' && this.lastname === ''){
        return '';
      }
      return this.name + ' ' + this.lastname;
    },
  },
  methods: {
    add(val){
      this.counter += val;
    },
    reduce(val){
      this.counter -= val;
    },
    // changeName(event, lastName){
    //   this.name = event.target.value;
    // },
    submitForm(){
      alert('Submitted!');
    },
    confirmInput(){
      this.confirmName = this.name;
    },
    resetInput(){
      this.name = '';
      this.lastname = '';
    }
  }
});

app.mount('#events');

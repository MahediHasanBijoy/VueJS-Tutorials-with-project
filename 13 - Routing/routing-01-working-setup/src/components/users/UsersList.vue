<template>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  <button @click="changingSaved">Save Change</button>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      changeSaved: false,
    }
  },
  methods: {
    changingSaved(){
      this.changeSaved = true;
    }
  },
  // navigation guard in component level
  beforeRouteEnter(to, from, next){
    console.log('UsersList cmp before enter');
    console.log(to, from);
    // to approve the navigation
    next();
  },
  // used for stopping a user to leave the page without submitting the form or other unsaved works
  beforeRouteLeave(to, from, next){
    console.log('UsersList cmp beforeRouteLeave');
    console.log(to, from);
    if(this.changeSaved){
      next();
    }else{
      const userWantsToLeave = confirm('Are you sure. You got unsaved changes!');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
<template>
  <div v-for="post in this.posts" :key="post">
    <postComponent :post="post"/>
  </div>
</template>

<script>
import axios from "axios";
import postComponent from '@/components/Post.vue';

export default {
    name: "homePage",
    components: {
        postComponent
    },
    data() {
      return {
        posts: []
      }
    },
    async created() {
      this.posts = (await axios.get("http://localhost:5005/api/posts/")).data;
    }
}

</script>

<style>

</style>
<template>
  <headerComponent />
  <router-view @post-create="handlePostCreated" :posts="posts" :id="$route.params.id"/>
</template>

<script>

import headerComponent from '@/components/Header.vue';
import axios from "axios";

export default {
  name: 'App',

  components: {
    headerComponent
  },

  data() {
    return {
      posts: []
    }
  },

  methods: {
    handlePostCreated(data) {
      this.posts = this.posts.reverse();
      this.posts.push({
        "user_id": this.posts.at(0).user_id,
        "id": this.posts.at(-1).id + 1,
        "title": data.title,
        "body": data.body
      });
      this.posts = this.posts.reverse();
    }
  },
  async created() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.posts = response.data.reverse();
  }
}

</script>

<style>
</style>

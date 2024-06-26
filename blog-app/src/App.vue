<template>
  <headerComponent />
  <router-view 
      @post-create="handlePostCreated" 
      @post-edit="handlePostEdited"
      :posts="posts"
    />
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
      posts: [],
      editedPost: {}
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
    },
    handlePostEdited(data) {
      alert("EDIT app.vue")
      console.log(data);
      const index = Math.abs(100 - data.id);
      if (index !== -1) {
        console.log("SUCCESS \n ID - " + data.id + "\n INDEX - " + index);
        this.editedPost = {
          "id": data.id,
          "user_id": this.posts.at(-1).user_id,
          "title": data.title,
          "body": data.body
        }
        this.posts.splice(index, 1, this.editedPost);
        console.log(this.posts[index].title + " - " +this.posts[index].body);
        this.$router.push("/");
      } else {
        console.log("ID - " + data.id + "\n INDEX - " + index);
        return;
      }
    }
  },
  async created() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.posts = response.data.reverse();
  }
}

</script>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
</style>
  

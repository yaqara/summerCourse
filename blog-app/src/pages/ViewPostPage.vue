<template>
  <div>
    <postComponent :post="post" :id="$route.params.id"/>
    <router-link to="/" class="return-link">BACK</router-link>
  </div>
</template>

<script>
import postComponent from "@/components/Post.vue"
import axios from "axios";

export default {
    name: "viewPostPage",
    components: {
        postComponent
    },
    data() {
      return {
        post: {
          default: {},
          type: Object,
          required: true
        }
      }
    },
    props: {
        id: String
    },
    async created() {
      try {
        this.post = (await axios.get(`http://localhost:5005/api/Posts/${this.id}`)).data;
        console.log(this.post)
      } catch (e) {
        alert(e);
      }
    }
}
</script>

<style scoped>
  .return-link {
    margin-top: 20px;
    margin-left: 50%;
  }
</style>
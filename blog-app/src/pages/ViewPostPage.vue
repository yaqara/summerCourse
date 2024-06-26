<template>
  <div v-for="post in posts.filter(p => p.id == $route.params.id)" :key="post">
    <postComponent :post="post" :id="$route.params.id"/>
    <router-link to="/" class="return-link">BACK</router-link>
  </div>
</template>

<script>
import postComponent from "@/components/Post.vue"

export default {
    name: "viewPostPage",
    components: {
        postComponent
    },
    props: {
        id: Number,
        posts: []
    }
}
</script>

<style scoped>
  .return-link {
    margin-top: 20px;
    margin-left: 50%;
  }
</style>
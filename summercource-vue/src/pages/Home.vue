<template>
    <router-link v-for="post in posts" :key="post.id" to="/post/">
        <postComponent :post="post"/>
    </router-link>
</template>

<script>
import postComponent from "@/components/Post"
import axios from "axios";

export default {
    name: "home-page",
    components: {
        postComponent
    },

    data() {
        return {
            posts: []
        }
    },

    async created() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.posts = response.data;
    }

}

</script>

<style>
</style>
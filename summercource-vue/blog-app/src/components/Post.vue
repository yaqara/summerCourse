<template>
    <router-link :to="{ name: 'postView', params: { id: this.post.id } }">
        <h2>{{ this.post.title }}</h2>
    </router-link>
    <p>ID - {{ this.post.id }}</p>
    <p>{{ this.post.body }}</p>
</template>

<script>
export default {
    name: "postComponent",
    props: {
        post: {}
    }
}
</script>

<style>

</style>

<template>
  <div>
    <input type="text" v-model="title" placeholder="Title">
    <textarea v-model="body" placeholder="Body" />
    <button @click="submitPost">Submit</button>
  </div>
</template>

<script>
export default {
    name: "createPostPage",
    data() {
        return {
            title : "",
            body : ""
        }
    },
    methods : {
        submitPost() {
            this.$emit('post-create', {
                "title": this.title,
                "body": this.body
            });
            this.$router.push("/");
        }
    }
}
</script>

<style>
</style>
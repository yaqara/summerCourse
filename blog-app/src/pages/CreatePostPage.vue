<template>
  <form>
    <input type="text" v-model="title" placeholder="Заголовок">
    <textarea v-model="body" placeholder="Текст" />
    <button @click="createPost">Сохранить</button>
  </form>
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
    emits: ['post-create'],
    methods : {
        createPost() {
            this.$emit('post-create', {
                "title": this.title,
                "body": this.body
            });
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 50px auto;
  }

  input, textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #555;
  }
</style>

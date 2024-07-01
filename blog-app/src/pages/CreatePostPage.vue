<template>
  <form>
    <input type="text" v-model="title" placeholder="Заголовок">
    <textarea v-model="body" placeholder="Текст" />
    <button @click="createPost" type="submit">Сохранить</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
    name: "createPostPage",
    data() {
        return {
            title : "",
            body : ""
        }
    },
    methods : {
        async createPost() {
          try {
            const response = await axios.post("http://localhost:5005/api/Posts", {
              "title": this.title,
              "body": this.body
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            console.log(response.data);
            this.$router.push("/");
          } catch (e) {
            console.log("Post is not created, because " + e);
          }
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

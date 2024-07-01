<template>
    <p class="hint">Редактирование</p>
    <form>
        <input type="text" v-model="title">
        <textarea v-model="body" />
        <button @click="editPost">Сохранить</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "editPostPage",
    props: {
        id: Number
    },
    data() {
        return {
            title: "",
            body: ""
        }
    },
    methods : {
        async editPost() {
            try {
                await axios.patch("", {
                    "id": this.id,
                    "title": this.title,
                    "body": this.body  
                });
                alert("123");
            } catch (e) {
                alert("Post is not edited, because " + e);
            }
            this.$router.push("/");
        }
    }
}

</script>

<style scoped>
    .hint {
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 50px auto;
        margin-top: 10px;
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

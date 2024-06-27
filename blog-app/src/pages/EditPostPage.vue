<template>
    <p class="hint">Редактирование</p>
    <form>
        <input type="text" v-model="title">
        <textarea v-model="body" />
        <button @click="editPost">Сохранить</button>
    </form>
</template>

<script>


export default {
    name: "editPostPage",
    props: {
        id: Number
    },
    emits: ['post-edit'],
    data() {
        return {
            title: "",
            body: ""
        }
    },
    methods : {
        editPost() {
            this.$emit('post-edit', {
                "title": this.title,
                "body": this.body,
                "id": this.$route.params.id
            });
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

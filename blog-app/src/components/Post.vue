<template>
    <div class="post">
        <router-link :to="{ 
            name: 'postView', params: { 
                id: post.id 
            } 
            }"><h2>{{ post.title }}</h2></router-link>
        <router-link :to="{ 
            name: 'postEdit', params: {
                id: post.id
            }
        }" class="action-link">Редактировать</router-link>
        <p class="post-id">ID - {{ post.id }}</p>
        <p class="post-body">{{ post.body ? hidePostBody : '' }}</p>
    </div>
</template>

<script>
export default {
    name: "postComponent",
    props: {
        post: {}
    },
    computed: {
        hidePostBody() {
            return this.post.body.length > 30 && !this.$route.path.startsWith('/post/') ? this.post.body.slice(0, 30) + '...' : this.post.body
        }
    }
}
</script>

<style>
    .post {
        display: block;
        background: #fff;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
    }
    .post:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
    h2 {
        color: #333;
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 10px;
    }
    a {
        text-decoration: none;
        color: #555;
    }
    a:hover {
        color: #333;
    }
    .action-link {
        float: right;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .post-id {
        font-size: 12px;
        color: #999;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .post-body {
        font-size: 16px;
        line-height: 1.5;
        color: #666;
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
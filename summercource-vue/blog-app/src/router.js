import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/pages/HomePage.vue"
import createPostPage from "@/pages/CreatePostPage.vue"
import viewPostPage from "@/pages/ViewPostPage.vue"

const routes = [
    {
        "path": "/",
        "component": homePage,
        "props": true
    },
    {
        "path": "/post/create",
        "component": createPostPage
    },
    {
        "path": "/post/:id",
        "component": viewPostPage,
        "name": "postView",
        "props": true
    }
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router;
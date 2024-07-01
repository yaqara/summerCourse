import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/pages/HomePage.vue"
import createPostPage from "@/pages/CreatePostPage.vue"
import viewPostPage from "@/pages/ViewPostPage.vue"
import editPostPage from "@/pages/EditPostPage.vue"

const routes = [
    {
        "path": "/",
        "component": homePage,
        "props": true
    },
    {
        "path": "/post/:id",
        "component": viewPostPage,
        "name": "postView",
        "props": true
    },
    {
        "path": "/post/create",
        "name": "postCreate",
        "component": createPostPage
    },
    {
        "path": "/post/edit/:id",
        "component": editPostPage,
        "name": "postEdit",
        "props": true
    }
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router;
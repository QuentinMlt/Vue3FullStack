import {createWebHistory, createRouter} from "vue-router";
import DemoJwt from "@/components/DemoJwt.vue";
import DemoVFor from "@/components/DemoVFor.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            name: 'accueil',
            component: HelloWorld,
        },
        {
            path: "/login",
            name: 'login',
            component: Login,
        },
        {
            path: "/register",
            name: 'register',
            component: Register,
        },
        {
            path: "/a-propos",
            name: 'a-propos',
            component: APropos,
        },
        {
            path: "/todolist",
            name: 'todolist',
            component: Todolist,
        },
        {
            path: "/demo/vfor",
            name: 'demovfor',
            component: DemoVFor,
        },
        {
            path: "/demo/jwt",
            name: 'demojwt',
            component: DemoJwt,
        },
    ]
})

export default router;
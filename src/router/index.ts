import {createRouter, createWebHistory} from "vue-router";

import {routesObject} from "./routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routesObject
})

export default router
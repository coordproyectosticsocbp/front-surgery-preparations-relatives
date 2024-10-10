import GuestView from "../../views/guest/GuestView.vue";
import NotFoundPage from "../../views/notFound/NotFoundPage.vue";

export const routesObject = [
    {
        path: '/',
        name: 'home',
        component: GuestView,
    },
    {
        path: "/:pathMatch(.*)*", // Comodín para manejar rutas no encontradas
        name: 'NotFound',
        component: NotFoundPage,
    },
]
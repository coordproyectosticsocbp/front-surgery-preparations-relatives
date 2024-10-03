const GuestView = () => import("@/views/guest/GuestView.vue")
const NotFoundPage = () => import("@/views/notFound/NotFoundPage.vue")
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
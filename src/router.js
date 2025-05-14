import HomeView from "@/Shared/Presentation/the-home.page.vue";
import MiningOperationsView from "@/MiningOperations/Presentation/mining-operations-view.page.vue";
import NotFound from "@/Shared/Presentation/not-found.component.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: HomeView},
    {path: '/operations', component: MiningOperationsView},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
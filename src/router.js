import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/annees",
    name: "annees",
    component: () => import("./components/Annee")
  },
  {
    path: "/annees/:id",
    name: "annee-details",
    component: () => import("./components/Annee")
  },
  {
    path: "/addAnnee",
    name: "addAnnee",
    component: () => import("./components/AddAnnee")
  },
  {
    path: "/mentions",
    name: "mentions",
    component: () => import("./components/Mention")
  },
  {
    path: "/addMention",
    name: "addMention",
    component: () => import("./components/AddMention")
  },
  {
    path: "/inscriptions",
    name: "inscriptions",
    component: () => import("./components/Inscription")
  },
  {
    path: "/addInscription",
    name: "addInscription",
    component: () => import("./components/AddInscription")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
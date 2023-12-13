/** @format */

import { createRouter, createWebHistory } from "vue-router";

const routes = require("@/pages").default();

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

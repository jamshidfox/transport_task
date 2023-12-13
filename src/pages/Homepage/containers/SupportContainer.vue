<!-- @format -->

<template>
  <BaseLayout>
    <div class="home-container">
      <SideMenuVue />
      <FormContentVue> <h1>Support</h1></FormContentVue>
    </div>
  </BaseLayout>
</template>

<script>
import FormContentVue from "../components/FormContent.vue";
import SideMenuVue from "../components/SideMenu.vue";
import BaseLayout from "@/components/Layout";

export default {
  components: {
    SideMenuVue,
    FormContentVue,
    BaseLayout,
  },
};
</script>

<style>
.home-container {
  display: flex;
  width: 100%;
}
</style>

<!-- @format -->

<template>
  <div class="home-container">
    <SideMenuVue />
    <FormContentVue />
  </div>
</template>

<script>
import FormContentVue from "../components/FormContent.vue";
import SideMenuVue from "../components/SideMenu.vue";

export default {
  components: {
    SideMenuVue,
    FormContentVue,
  },
};
</script>

<style>
.home-container {
  display: flex;
  width: 100%;
}
</style>

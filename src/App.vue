<template>
  <the-header />
  <router-view />
  <the-footer />
  <pv-toast />
</template>

<script>
import TheHeader from "@/Shared/Presentation/the-header.component.vue";
import TheFooter from "@/Shared/Presentation/the-footer.component.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
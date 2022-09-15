<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuItem from "./components/templates/MenuItem.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <MenuItem></MenuItem>
    </div>
  </header>
  <section class="container"></section>

  <RouterView />
</template>

<style lang="scss">
@import "./assets/main.scss";

header {
  display: flex;
  place-items: center;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
</style>

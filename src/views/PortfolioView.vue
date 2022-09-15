<template>
  <main>
    <h1>This is an portefolio page</h1>

    <div v-for="e in data.github" :key="e">
      <ul>
        <li>{{ e.id }}</li>
        <li>{{ e.name }}</li>
        <li>{{ e.created_at }}</li>
      </ul>
    </div>
    <!-- <p>{{ data.github }}</p> -->
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PortfolioView",
  components: {},
  setup() {
    const result = { github: {} };

    fetch("https://api.github.com/users/AxelMenard/repos")
      .then((response) => response.json())
      .then((data) => (result.github = data));

    const data = result;
    console.log("data:", data);

    return { data };
  },
});
</script>

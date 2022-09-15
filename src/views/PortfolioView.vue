<template>
  <main>
    <h1>This is an portefolio page</h1>
    <v-list-item :key="index" v-for="(repo, index) in repositories">
      {{ getUserFullName(repositories) }}
    </v-list-item>
    <!-- <div v-for="e in data.github" :key="e">
      <ul>
        <li>{{ e.id }}</li>
        <li>{{ e.name }}</li>
        <li>{{ e.created_at }}</li>
      </ul>
    </div> -->
    <!-- <p>{{ data.github }}</p> -->
  </main>
</template>
<script lang="ts">
import type { IRepository } from "@/interfaces/internals/github";
import { GitHubApi } from "@/services/githubApi";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PortfolioView",
  components: {},
  async mounted(): Promise<void> {
    const repositories = await GitHubApi.getAllRepositories();
    console.log("repo:", repositories);
  },

  getUserFullName(repository: IRepository): string {
    return `${repository.name} ${repository.full_name}`;
  },
});
</script>

<script lang="ts">
import type { IRepository } from '@/interfaces/internals/github';
import { GitHubApi } from '@/services/githubApi';

export default class HomeComponent extends Vue {
  private repositories: IRepository[] = [];

  async mounted(): Promise<void> {
    this.repositories = await GitHubApi.getAllRepositories();
    console.log("repo:", repositories);
  },
}
</script>

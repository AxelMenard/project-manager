import type { IRepository } from "@/interfaces/internals/github";
import type { RepositoryRequest } from "@/interfaces/requests/githubRequest";

export abstract class GithubDTO {
  static arrayRepositoryRequestToObjectIRepository(
    repositoryRequest: RepositoryRequest[]
  ): IRepository[] {
    return repositoryRequest.map((repo) => {
      return this.repositoryRequestToObjectIRepository(repo);
    });
  }

  private static repositoryRequestToObjectIRepository(
    repositoryRequest: RepositoryRequest
  ): IRepository {
    return {
      name: repositoryRequest.name,
      full_name: repositoryRequest.full_name,
      private: repositoryRequest.private,
      html_url: repositoryRequest.html_url,
      description: repositoryRequest?.description ?? "",
    };
  }
}

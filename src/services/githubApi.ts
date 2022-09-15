import { GithubDTO } from "@/transposes/github";
import type { IRepository } from "@/interfaces/internals/github";
import type { RepositoryRequest } from "@/interfaces/requests/githubRequest";
import axios from "axios";

export abstract class GitHubApi {
  private static baseURL = "https://api.github.com";

  static async getAllRepositories(): Promise<IRepository[]> {
    const url = `${this.baseURL}/users/AxelMenard/repos`;
    const response = await axios.get<RepositoryRequest[]>(url);
    const result = GithubDTO.arrayRepositoryRequestToObjectIRepository(
      response.data
    );
    return result;
  }
}

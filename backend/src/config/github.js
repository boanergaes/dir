import { Octokit } from "octokit";

export const createGitHubClient = (accessToken) => {
  if (!accessToken) {
    throw new Error("GitHub access token is required");
  }
  return new Octokit({ auth: accessToken });
};

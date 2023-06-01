import axios from "axios";

export type Project = {
  name: string;
  title: string | undefined;
  topics: [];
  homepage: string;
  html_url: string;
  owner: {
    login: string;
  };
  image_url: string;
  languages: string[];
};

async function listUserRepositories(username: string) {
  try {
    const response = await axios.get<Project[]>(
      `https://api.github.com/users/${username}/repos`
    );

    const repositories = response.data;

    return repositories;
  } catch (error) {
    console.error(
      "Ocorreu um erro ao listar os repositórios do usuário:",
      error
    );
    throw error;
  }
}

async function getReadmeTitle(
  owner: string,
  repo: string
): Promise<string | undefined> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const readmeContent = Buffer.from(response.data.content, "base64").toString(
      "utf-8"
    );

    const titleRegex = /^#\s+(.+)/m;
    const match = readmeContent.match(titleRegex);

    if (match && match[1]) {
      return match[1];
    }

    return undefined;
  } catch (error) {
    console.error("Ocorreu um erro ao obter o título do README:", error);
    throw error;
  }
}

async function getImageUrl(owner: string, repo: string) {
  const path = "design/image.png";
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    );

    return response.data.download_url;
  } catch (error) {
    console.error("Ocorreu um erro ao obter o endereço da imagem:", error);
    throw error;
  }
}

async function getTechnologies(repository: string) {
  const path = `https://api.github.com/repos/filiphis/${repository}/languages`;

  const response = await axios.get(path);
  const data = await response.data;

  return Object.keys(data);
}

async function formatRepositories(repositories: Project[]) {
  const formattedRepositories: Project[] = [];

  for (const repo of repositories) {
    const formattedRepo: Project = {
      name: repo.name,
      owner: {
        login: repo.owner.login,
      },
      title: await getReadmeTitle(repo.owner.login, repo.name),
      image_url: await getImageUrl(repo.owner.login, repo.name),
      topics: repo.topics,
      homepage: repo.homepage,
      html_url: repo.html_url,
      languages: await getTechnologies(repo.name),
    };

    formattedRepositories.push(formattedRepo);
  }

  return formattedRepositories;
}

function filterRepositoriesWithPortfolioTag(repos: Project[]) {
  const filteredRepositories = repos.filter((repo: Project) => {
    if (repo.topics.length > 0) {
      return repo;
    }
  });

  return filteredRepositories;
}

export async function myProjects(githubUserName: string) {
  const githubUsername = githubUserName;
  const repositoriesPromise = listUserRepositories(githubUsername);
  const repositories = await repositoriesPromise;
  const filteredRepositories = await filterRepositoriesWithPortfolioTag(
    repositories
  );
  const formattedRepos = await formatRepositories(filteredRepositories);

  return formattedRepos;
}

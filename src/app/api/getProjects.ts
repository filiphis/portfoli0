import axios from "axios";
const githubApiKey = process.env.NEXT_PUBLIC_GITHUB_API_KEY;

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
    // const response = await axios.get<Project[]>(
    //   `https://api.github.com/users/${username}/repos`
    // );

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?type=all`,
      {
        next: { revalidate: 60 },
        headers: {
          Authorization: `Bearer ${githubApiKey}`,
        },
      }
    );

    const data = await response.json();

    // const repositories = response.data;
    const repositories = await data;

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
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${githubApiKey}`,
        },
        next: { revalidate: 60 },
      }
    );
    const response = await res.json();

    const readmeContent = Buffer.from(response.content, "base64").toString(
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
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${githubApiKey}`,
        },
        next: { revalidate: 60 },
      }
    );

    const response = await res.json();

    return response.download_url;
  } catch (error) {
    console.error("Ocorreu um erro ao obter o endereço da imagem:", error);
    throw error;
  }
}

async function getTechnologies(repository: string) {
  const path = `https://api.github.com/repos/filiphis/${repository}/languages`;

  // const response = await axios.get(path);
  // const data = await response.data;
  const response = await fetch(path, {
    headers: {
      Authorization: `Bearer ${githubApiKey}`,
    },
  });
  const data = await response.json();

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
  console.log("repos", repos);
  const filteredRepositories = repos.filter((repo: Project) => {
    if (
      repo.topics.length > 0 &&
      repo.topics.find((item) => item === "portfolio") &&
      repo.homepage
    ) {
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

import axios from "axios";

export type Repository = {
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
  };
};

export async function listUserRepositories(username: string, apiKey: string) {
  try {
    const response = await axios.get<Repository[]>(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        params: {
          type: "private",
        },
      }
    );

    const repositories = response.data;
    return repositories;
  } catch (error) {
    console.error(
      "Ocorreu um erro ao listar os repositórios privados do usuário:",
      error
    );
    throw error;
  }
}

async function main() {
  const username = "filiphis";
  const apiKey =
    "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";

  try {
    const repositories = await listUserRepositories(username, apiKey);
    console.log("repositories", repositories);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

main();

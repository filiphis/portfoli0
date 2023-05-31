type Project = {
  name: string;
  topics: [];
  homepage: string;
  html_url: string;
};

export async function getMyRepoList() {
  const response = await fetch("https://api.github.com/users/filiphis/repos");
  const allProjects: Project[] = await response.json();

  const filteredProjects: Project[] = allProjects.filter((project) => {
    if (project.topics.length > 0) {
    }
  });

  return filteredProjects;
}

// function validateProjects(params:type) {

// }

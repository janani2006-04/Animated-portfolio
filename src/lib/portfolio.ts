import {
  about,
  achievements,
  certifications,
  education,
  experience,
  navLinks,
  process,
  profile,
  projects,
  skills,
  vision,
} from "@/data/content";

export function getPortfolio() {
  return {
    profile,
    navLinks,
    about,
    skills,
    experience,
    education,
    projects,
    certifications,
    achievements,
    process,
    vision,
  };
}

export function getProjects(category?: string | null) {
  if (!category || category === "All") return projects;
  const needle = category.toLowerCase();
  return projects.filter(
    (project) =>
      project.category.toLowerCase().includes(needle) ||
      project.tags.some((tag) => tag.toLowerCase() === needle),
  );
}

export function getProjectCategories() {
  const set = new Set<string>(["All"]);
  for (const project of projects) {
    set.add(project.category);
  }
  return [...set];
}

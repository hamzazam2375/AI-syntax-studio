"use client";

import { useMemo, useState } from "react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projectFilters, projects, type Project } from "@/lib/projects";

const inProgressProjects = projects.filter(
  (project) => project.status === "in-progress" || project.status === "reserved",
);

const featuredProjects = projects.filter(
  (project) => project.featured && project.status !== "in-progress",
);

function statusLabel(project: Project) {
  if (project.status === "in-progress") return "In progress";
  if (project.status === "reserved") return "Reserved";
  if (project.featured) return "Featured";
  return null;
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const visible = useMemo(() => {
    if (filter === "All") {
      return projects.filter(
        (project) => !project.featured && project.status !== "in-progress" && project.status !== "reserved",
      );
    }
    if (filter === "In progress") {
      return inProgressProjects;
    }
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section className="section work-section" id="projects" aria-labelledby="projects-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PROJECTS</p>
          <h2 id="projects-heading">Active research and shipped systems.</h2>
        </div>
        <p className="section-summary">
          Current final-year work sits alongside production AI, automation, backend, and immersive
          systems. Public repositories and demos are linked where they exist.
        </p>
      </div>

      {filter === "All" ? (
        <>
          <div className="portfolio-toolbar">
            <h3>In progress</h3>
          </div>
          <div className="featured-grid progress-grid">
            {inProgressProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="portfolio-toolbar">
            <h3>Featured work</h3>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </>
      ) : null}

      <div className="portfolio-toolbar">
        <h3>{filter === "All" ? "Complete portfolio" : "Filtered work"}</h3>
        <div className="filter-row" role="tablist" aria-label="Filter projects by category">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={filter === item ? "is-active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} featured={project.featured} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const badge = statusLabel(project);

  return (
    <article
      className={`project-card ${featured ? "is-featured" : ""} ${project.status === "reserved" ? "is-reserved" : ""} ${project.status === "in-progress" ? "is-progress" : ""}`}
    >
      <ProjectVisual project={project} />
      <div className="project-meta">
        <span>{project.category}</span>
        {badge ? <span className={`status-badge is-${project.status ?? "featured"}`}>{badge}</span> : null}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {project.demo || project.github ? (
        <div className="project-links">
          {project.demo ? (
            <a href={project.demo.href} target="_blank" rel="noopener noreferrer">
              {project.demo.label} ↗
            </a>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

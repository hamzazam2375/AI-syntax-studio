"use client";

import { useMemo, useState } from "react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projectFilters, projects } from "@/lib/projects";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const visible = useMemo(() => {
    if (filter === "All") {
      return projects.filter((project) => !project.featured);
    }
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const featured = projects.filter((project) => project.featured);

  return (
    <section className="section work-section" id="projects" aria-labelledby="projects-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PROJECTS</p>
          <h2 id="projects-heading">Featured systems we have shipped.</h2>
        </div>
        <p className="section-summary">
          A unified view of production AI, automation, backend, and immersive work
          from the studio portfolio. Links point to public repositories and demos where they exist.
        </p>
      </div>

      <div className="featured-grid">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} featured />
        ))}
      </div>

      <div className="portfolio-toolbar">
        <h3>Complete portfolio</h3>
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
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <article className={`project-card ${featured ? "is-featured" : ""}`}>
      <ProjectVisual project={project} />
      <div className="project-meta">
        <span>{project.category}</span>
        {featured ? <span>FEATURED</span> : null}
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
    </article>
  );
}

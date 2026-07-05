import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import api from "@/lib/api";
import ProjectModal from "@/components/shared/ProjectModal";
import GetInTouch from "@/components/layout/GetInTouch";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api
      .get("/projects")
      .then(({ data }) => setProjects(data))
      .finally(() => setLoading(false));
  }, []);

  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags?.includes(activeTag));

  return (
    <div data-testid="projects-page">
      <section className="bg-obsidian border-b border-white/10">
        <div className="max-w-content mx-auto px-6 pt-16 md:pt-20 pb-14 text-center">
          <span className="font-mono-label text-[11px] text-ash">Our Work</span>
          <h1
            data-testid="projects-page-headline"
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-light text-cloud leading-[0.95] text-balance"
          >
            Projects
          </h1>
          <p className="mt-5 text-base md:text-lg font-light text-ash max-w-2xl mx-auto leading-relaxed">
            A look at the websites, products, and automation systems we've
            shipped for clients.
          </p>

          {tags.length > 1 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  data-testid={`projects-filter-${tag.replace(/\s+/g, "-").toLowerCase()}`}
                  className={`font-mono-label text-[11px] rounded-pill px-4 py-2 border transition-colors duration-200 ${
                    activeTag === tag
                      ? "bg-pure text-void border-pure"
                      : "text-ash border-white/15 hover:border-white/30 hover:text-cloud"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-obsidian">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20">
          {loading ? (
            <p className="text-center text-ash" data-testid="projects-loading">
              Loading projects…
            </p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-ash" data-testid="projects-empty">
              No projects found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.button
                  key={project.id}
                  onClick={() => setSelected(project)}
                  data-testid={`project-card-${project.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05, ease: "easeOut" }}
                  className="group text-left rounded-feature overflow-hidden border border-white/10 hover:border-iris/40 bg-graphite/40 transition-colors duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-label text-[9px] text-ash bg-white/5 border border-white/10 rounded-pill px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-display font-light text-cloud">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-ash leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      <ProjectModal
        project={selected}
        open={!!selected}
        onOpenChange={(v) => !v && setSelected(null)}
      />

      <GetInTouch />
    </div>
  );
};

export default ProjectsPage;

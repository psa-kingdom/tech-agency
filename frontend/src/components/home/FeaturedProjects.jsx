import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import api from "@/lib/api";
import ProjectModal from "@/components/shared/ProjectModal";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;
    api
      .get("/projects", { params: { featured: true } })
      .then(({ data }) => {
        if (mounted) setProjects(data.slice(0, 5));
      })
      .catch(() => {})
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  if (!loading && projects.length === 0) return null;

  return (
    <section id="work" className="bg-abyss border-t border-white/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono-label text-[11px] text-ash">Our Work</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-light text-cloud leading-[0.95] text-balance">
            Featured projects
          </h2>
          <p className="mt-5 text-base md:text-lg font-light text-ash leading-relaxed">
            A sample of recent work across websites, products, and automation
            systems we've shipped for clients.
          </p>
        </div>

        {!loading && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-5 md:auto-rows-[220px]">
            {projects.map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => setSelected(project)}
                data-testid={`featured-project-tile-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-feature text-left border border-white/10 hover:border-iris/40 transition-colors duration-300 ${
                  i === 0 ? "md:col-span-2 md:row-span-2 min-h-[280px]" : "min-h-[220px]"
                }`}
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-label text-[9px] text-cloud bg-black/40 border border-white/15 rounded-pill px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className={`font-display font-light text-cloud ${
                      i === 0 ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            data-testid="view-all-projects-button"
            className="inline-flex items-center gap-2 rounded-lg px-6 h-12 text-sm font-medium border border-white/20 text-cloud hover:bg-white/5 transition-colors duration-200"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <ProjectModal
        project={selected}
        open={!!selected}
        onOpenChange={(v) => !v && setSelected(null)}
      />
    </section>
  );
};

export default FeaturedProjects;

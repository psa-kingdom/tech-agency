import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { getOptimizedImageUrl } from "@/lib/utils";

const ProjectModal = ({ project, open, onOpenChange }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="project-modal"
        className="bg-graphite border-white/10 text-cloud max-w-5xl w-[92vw] p-0 overflow-hidden rounded-feature md:h-[80vh] flex flex-col md:flex-row"
      >
        {/* Left Column: Image */}
        <div className="relative w-full md:w-1/2 h-[35vh] md:h-full bg-obsidian overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src={getOptimizedImageUrl(project.image_url, 1000)}
            alt={project.title}
            loading="lazy"
            data-testid="project-modal-image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto justify-between bg-graphite/95">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  data-testid={`project-modal-tag-${tag}`}
                  className="font-mono-label text-[10px] text-iris bg-iris/10 border border-iris/25 rounded-pill px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <DialogTitle
              data-testid="project-modal-title"
              className="text-2xl md:text-3xl font-display font-light text-cloud leading-tight"
            >
              {project.title}
            </DialogTitle>

            <p
              data-testid="project-modal-description"
              className="text-base text-ash leading-relaxed font-light"
            >
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="border-t border-white/10 pt-5 mt-5">
                <h4 className="font-mono-label text-[10px] text-iris tracking-wider mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      data-testid={`project-modal-highlight-${idx}`}
                      className="flex items-start gap-3 text-sm text-ash leading-relaxed font-light"
                    >
                      <span className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-iris/10 border border-iris/20 text-iris shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-8 border-t border-white/5 pt-4 flex justify-end">
            <button
              onClick={() => onOpenChange(false)}
              className="text-xs font-mono-label text-ash hover:text-cloud transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

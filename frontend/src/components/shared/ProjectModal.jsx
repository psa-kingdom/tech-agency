import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ProjectModal = ({ project, open, onOpenChange }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="project-modal"
        className="bg-graphite border-white/10 text-cloud max-w-3xl w-[92vw] p-0 overflow-hidden rounded-feature max-h-[88vh] overflow-y-auto"
      >
        <div className="relative w-full aspect-[16/9] bg-obsidian">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-10 pointer-events-none" />
          <img
            src={project.image_url}
            alt={project.title}
            data-testid="project-modal-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
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
          <h3
            data-testid="project-modal-title"
            className="text-2xl md:text-3xl font-display font-light text-cloud"
          >
            {project.title}
          </h3>
          <p
            data-testid="project-modal-description"
            className="mt-4 text-base text-ash leading-relaxed"
          >
            {project.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

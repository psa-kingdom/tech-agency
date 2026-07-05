import React, { useCallback, useEffect, useState } from "react";
import { Plus, Pencil, Trash2, LogOut, Star } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import ProjectFormDialog from "@/components/admin/ProjectFormDialog";
import api from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const AdminDashboardPage = () => {
  const { admin, logout } = useAdminAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [projectsRes, tagsRes] = await Promise.all([
        api.get("/projects"),
        api.get("/tags"),
      ]);
      setProjects(projectsRes.data);
      setTags(tagsRes.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleDelete = async (project) => {
    setDeletingId(project.id);
    try {
      await api.delete(`/projects/${project.id}`);
      toast({ title: "Project deleted" });
      fetchAll();
    } catch {
      toast({ title: "Failed to delete project", variant: "destructive" });
    } finally {
      setDeletingId(null);
    }
  };

  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <div className="min-h-screen bg-obsidian">
      <header className="border-b border-white/10 sticky top-0 bg-obsidian/90 backdrop-blur-md z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <span data-testid="admin-user-email" className="text-sm text-ash hidden sm:inline">
              {admin?.email}
            </span>
            <Button
              onClick={logout}
              data-testid="admin-logout-button"
              variant="outline"
              className="border-white/20 text-cloud hover:bg-white/5 rounded-lg h-9"
            >
              <LogOut className="w-4 h-4" /> Log Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-display font-light text-cloud">Projects</h1>
            <p className="text-sm text-ash mt-1">
              {projects.length} total · {featuredCount}/5 featured on homepage
            </p>
          </div>
          <Button
            onClick={() => {
              setEditing(null);
              setFormOpen(true);
            }}
            data-testid="admin-add-project-button"
            className="bg-pure text-void hover:bg-cloud rounded-lg h-10"
          >
            <Plus className="w-4 h-4" /> Add Project
          </Button>
        </div>

        {loading ? (
          <p className="text-ash" data-testid="admin-projects-loading">
            Loading…
          </p>
        ) : projects.length === 0 ? (
          <p className="text-ash" data-testid="admin-projects-empty">
            No projects yet. Add your first one.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                data-testid={`admin-project-card-${project.id}`}
                className="bg-graphite/50 border border-white/10 rounded-feature overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 bg-iris text-white text-[10px] font-mono-label rounded-pill px-2.5 py-1">
                      <Star className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-medium text-cloud">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-ash bg-white/5 border border-white/10 rounded-pill px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Button
                      onClick={() => {
                        setEditing(project);
                        setFormOpen(true);
                      }}
                      data-testid={`admin-edit-project-${project.id}`}
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-cloud hover:bg-white/5 rounded-lg flex-1"
                    >
                      <Pencil className="w-3.5 h-3.5" /> Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(project)}
                      disabled={deletingId === project.id}
                      data-testid={`admin-delete-project-${project.id}`}
                      variant="outline"
                      size="sm"
                      className="border-destructive/40 text-destructive hover:bg-destructive/10 rounded-lg"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <ProjectFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        project={editing}
        availableTags={tags}
        onSaved={fetchAll}
      />
    </div>
  );
};

export default AdminDashboardPage;

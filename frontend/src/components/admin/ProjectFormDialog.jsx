import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import TagInput from "./TagInput";
import api from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const emptyForm = {
  title: "",
  description: "",
  image_url: "",
  tags: [],
  highlights: [],
  featured: false,
  order: 0,
};

const ProjectFormDialog = ({ open, onOpenChange, project, onSaved, availableTags = [] }) => {
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (project) {
      setForm({
        title: project.title,
        description: project.description,
        image_url: project.image_url,
        tags: project.tags || [],
        highlights: project.highlights || [],
        featured: project.featured,
        order: project.order,
      });
    } else {
      setForm(emptyForm);
    }
    setError("");
  }, [project, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const cleanHighlights = (form.highlights || [])
      .map((h) => h.trim())
      .filter(Boolean);
    const payload = { ...form, highlights: cleanHighlights };
    try {
      if (project) {
        await api.put(`/projects/${project.id}`, payload);
      } else {
        await api.post(`/projects`, payload);
      }
      toast({ title: project ? "Project updated" : "Project created" });
      onSaved();
      onOpenChange(false);
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="project-form-dialog"
        className="bg-graphite border-white/10 text-cloud max-w-lg max-h-[88vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-cloud font-display font-light text-2xl">
            {project ? "Edit Project" : "New Project"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label className="text-ash text-xs">Title</Label>
            <Input
              required
              data-testid="project-form-title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-obsidian border-white/10 text-cloud mt-1.5"
            />
          </div>
          <div>
            <Label className="text-ash text-xs">Description</Label>
            <Textarea
              required
              rows={4}
              data-testid="project-form-description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-obsidian border-white/10 text-cloud mt-1.5"
            />
          </div>
          <div>
            <Label className="text-ash text-xs">Highlights (one bullet point per line)</Label>
            <Textarea
              rows={4}
              data-testid="project-form-highlights"
              value={(form.highlights || []).join("\n")}
              onChange={(e) => setForm({ ...form, highlights: e.target.value.split("\n") })}
              className="bg-obsidian border-white/10 text-cloud mt-1.5"
              placeholder="e.g. Key accomplishment 1&#10;Key accomplishment 2"
            />
          </div>
          <div>
            <Label className="text-ash text-xs">Image URL</Label>
            <Input
              required
              data-testid="project-form-image-url"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              className="bg-obsidian border-white/10 text-cloud mt-1.5"
              placeholder="https://…"
            />
          </div>
          <div>
            <Label className="text-ash text-xs mb-1.5 block">Service Tags</Label>
            <TagInput
              value={form.tags}
              onChange={(tags) => setForm({ ...form, tags })}
              suggestions={availableTags}
            />
          </div>
          <div className="flex items-center justify-between border border-white/10 rounded-lg px-4 py-3">
            <div>
              <Label className="text-cloud text-sm">Featured on Homepage</Label>
              <p className="text-xs text-fog mt-0.5">Shows in the homepage bento grid</p>
            </div>
            <Switch
              data-testid="project-form-featured-switch"
              checked={form.featured}
              onCheckedChange={(v) => setForm({ ...form, featured: v })}
            />
          </div>
          <div>
            <Label className="text-ash text-xs">Order</Label>
            <Input
              type="number"
              data-testid="project-form-order"
              value={form.order}
              onChange={(e) => setForm({ ...form, order: parseInt(e.target.value || "0", 10) })}
              className="bg-obsidian border-white/10 text-cloud mt-1.5 w-28"
            />
            <p className="text-xs text-fog mt-1.5">Lower numbers appear first</p>
          </div>
          {error && (
            <p data-testid="project-form-error" className="text-sm text-destructive">
              {error}
            </p>
          )}
          <DialogFooter>
            <Button
              type="submit"
              disabled={saving}
              data-testid="project-form-submit"
              className="bg-pure text-void hover:bg-cloud rounded-lg"
            >
              {saving ? "Saving…" : project ? "Save Changes" : "Create Project"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectFormDialog;

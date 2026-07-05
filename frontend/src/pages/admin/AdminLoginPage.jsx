import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/layout/Logo";

const AdminLoginPage = () => {
  const { admin, checking, login } = useAdminAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!checking && admin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const result = await login(email, password);
    setSubmitting(false);
    if (result.success) {
      navigate("/admin/dashboard");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="bg-graphite/50 border border-white/10 rounded-feature p-8">
          <h1 className="text-2xl font-display font-light text-cloud text-center">
            Admin Login
          </h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label className="text-ash text-xs">Email</Label>
              <Input
                type="email"
                required
                data-testid="admin-login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-obsidian border-white/10 text-cloud mt-1.5"
                autoComplete="username"
              />
            </div>
            <div>
              <Label className="text-ash text-xs">Password</Label>
              <Input
                type="password"
                required
                data-testid="admin-login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-obsidian border-white/10 text-cloud mt-1.5"
                autoComplete="current-password"
              />
            </div>
            {error && (
              <p data-testid="admin-login-error" className="text-sm text-destructive">
                {error}
              </p>
            )}
            <Button
              type="submit"
              disabled={submitting}
              data-testid="admin-login-submit"
              className="w-full bg-pure text-void hover:bg-cloud rounded-lg h-11"
            >
              {submitting ? "Signing in…" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;

import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "@/context/AdminAuthContext";

const ProtectedRoute = ({ children }) => {
  const { admin, checking } = useAdminAuth();

  if (checking) {
    return (
      <div
        data-testid="admin-auth-checking"
        className="min-h-screen bg-obsidian flex items-center justify-center text-ash text-sm"
      >
        Checking session…
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

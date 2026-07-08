import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicePage from "@/pages/ServicePage";
import ProjectsPage from "@/pages/ProjectsPage";
import AdminLoginPage from "@/pages/admin/AdminLoginPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import { AdminAuthProvider } from "@/context/AdminAuthContext";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster />
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;

import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import ServicePage from "@/pages/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

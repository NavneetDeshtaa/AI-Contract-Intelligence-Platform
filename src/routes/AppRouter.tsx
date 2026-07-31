import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ContractListPage from "../pages/ContractListPage";
import ContractDetailPage from "../pages/ContractDetailPage";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/contracts" element={<ContractListPage />} />
          <Route path="/contracts/:id" element={<ContractDetailPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/contracts" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
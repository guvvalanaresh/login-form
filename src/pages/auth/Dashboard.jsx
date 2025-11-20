// src/pages/auth/Dashboard.jsx
import React from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/button/Button";
import Card from "../../components/ui/card/Card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            You are logged in to your account.
          </p>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              {user?.name || "Authenticated User"}
            </p>
            <p className="text-xs text-gray-500">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-3">
            <p className="text-[11px] text-gray-500">Status</p>
            <p className="text-sm font-semibold text-gray-900">Logged in</p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-3">
            <p className="text-[11px] text-gray-500">Security Level</p>
            <p className="text-sm font-semibold text-gray-900">Good</p>
          </div>
          <div className="rounded-lg bg-amber-50 p-3">
            <p className="text-[11px] text-gray-500">Last Login</p>
            <p className="text-sm font-semibold text-gray-900">Just now</p>
          </div>
        </div>

        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default Dashboard;

import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

// Dummy authentication - in a real app, this would be handled properly
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (dummy check)
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    setIsAuthenticated(isLoggedIn);
  }, []);

  return {
    isAuthenticated,
    login: (username: string, password: string) => {
      if (username === "admin" && password === "admin123") {
        localStorage.setItem("adminLoggedIn", "true");
        setIsAuthenticated(true);
        return true;
      }
      return false;
    },
    logout: () => {
      localStorage.removeItem("adminLoggedIn");
      setIsAuthenticated(false);
    }
  };
};

const AdminLayout = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={logout}
                className="ml-4 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
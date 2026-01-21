import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <AdminDashboard onLogout={setIsAuthenticated} />
      ) : (
        <AdminLogin onLogin={setIsAuthenticated} />
      )}
    </div>
  );
};

export default AdminApp;
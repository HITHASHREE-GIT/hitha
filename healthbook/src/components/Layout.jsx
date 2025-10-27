import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [notifications] = useState(3);

  const navItems = [
    { path: '/app/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/app/reports', label: 'My Reports', icon: '📂' },
    { path: '/app/reminders', label: 'Reminders', icon: '💊' },
    { path: '/app/share', label: 'Share Records', icon: '🔗' },
    { path: '/app/healthbot', label: 'HealthBot', icon: '🤖' },
    { path: '/app/analytics', label: 'Analytics', icon: '📊' },
    { path: '/app/settings', label: 'Settings', icon: '⚙️' },
    { path: '/app/help', label: 'Help & Support', icon: '📞' },
  ];

  return (
    <div className="flex h-screen bg-crisp-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg fixed h-full overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-primary-teal">HealthBook</h1>
          <p className="text-xs text-text-light mt-1">Your Health, Your Records</p>
        </div>
        
        <nav className="p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                  isActive
                    ? 'bg-primary-teal text-white shadow-md'
                    : 'text-text-dark hover:bg-soft-mint'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex-1 max-w-xl">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-teal focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-opacity-20"
            />
          </div>
          
          <div className="flex items-center gap-6 ml-6">
            <button className="relative">
              <span className="text-2xl">🔔</span>
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-error-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {notifications}
                </span>
              )}
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-teal rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <p className="text-sm font-semibold text-text-dark">John Doe</p>
                <p className="text-xs text-text-light">Patient</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

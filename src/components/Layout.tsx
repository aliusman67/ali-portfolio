import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Terminal, Bug, Globe, Network, Target } from 'lucide-react';

function Layout() {
  const location = useLocation();
  
  const navigation = [
    { path: '/', icon: Terminal, label: 'Home' },
    { path: '/red-teaming', icon: Target, label: 'Red Teaming' },
    { path: '/bug-bounty', icon: Bug, label: 'Bug Bounty' },
    { path: '/web-security', icon: Globe, label: 'Web Security' },
    { path: '/active-directory', icon: Network, label: 'Active Directory' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-black border-r border-green-500/30 text-green-500 shadow-lg">
        <div className="relative flex flex-col items-center">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center justify-center h-16 w-16 mt-2 mb-2 mx-auto hover:text-green-400 transition-colors ${
                  location.pathname === item.path ? 'text-green-400 border-r-2 border-green-400' : ''
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="absolute left-16 w-auto p-2 min-w-max rounded-md shadow-md text-green-500 bg-black border border-green-500/30 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
      <main className="ml-16 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Terminal, Bug, Globe, Network, Target, Menu, X } from 'lucide-react';

function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navigation = [
    { path: '/', icon: Terminal, label: 'Home' },
    { path: '/red-teaming', icon: Target, label: 'Red Teaming' },
    { path: '/bug-bounty', icon: Bug, label: 'Bug Bounty' },
    { path: '/web-security', icon: Globe, label: 'Web Security' },
    { path: '/active-directory', icon: Network, label: 'Active Directory' },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 text-green-500 hover:text-green-400 transition-colors"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Sidebar */}
      <nav
        className={`
          fixed md:relative
          top-0 left-0 h-screen
          md:w-16 md:flex md:flex-col
          ${isMenuOpen ? 'w-64' : 'w-0'}
          bg-black border-r border-green-500/30
          transition-all duration-300 ease-in-out
          z-40 overflow-hidden
        `}
      >
        <div className="flex flex-col h-full pt-16 md:pt-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  group relative flex items-center
                  h-14 w-full
                  px-6 md:px-0
                  hover:bg-green-500/10
                  transition-colors
                  ${isActive ? 'text-green-400 bg-green-500/10' : 'text-green-500'}
                `}
              >
                <Icon className="w-5 h-5 md:mx-auto" />
                <span className="ml-4 md:hidden text-sm">{item.label}</span>
                
                {/* Tooltip for desktop */}
                <div className="hidden md:group-hover:block absolute left-16 px-2 py-1 
                              bg-black border border-green-500/30 rounded-md 
                              text-xs whitespace-nowrap">
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 md:ml-16 p-4 md:p-8 w-full transition-all duration-300">
        <Outlet />
      </main>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default Layout;
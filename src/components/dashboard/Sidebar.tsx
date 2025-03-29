
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, LayoutDashboard, User, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: User, label: 'Students', active: false },
    { icon: BookOpen, label: 'Attendance', active: false },
  ];

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button 
          onClick={toggleMobileSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-primary rounded-md text-white"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Sidebar */}
      <div 
        className={cn(
          "h-screen fixed left-0 top-0 z-40 transition-all duration-300 flex flex-col glass-card",
          collapsed ? "w-20" : "w-64",
          isMobile && (mobileOpen ? "translate-x-0" : "-translate-x-full"),
          !isMobile && "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h1 className={cn("text-xl font-bold text-white transition-opacity", 
            collapsed && "opacity-0"
          )}>
            Bageshree House
          </h1>
          {!isMobile && (
            <button 
              onClick={toggleSidebar} 
              className="text-white hover:bg-white/10 p-2 rounded-md"
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        <div className="flex-1 py-6">
          <ul className="space-y-2 px-3">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={cn(
                    "flex items-center p-3 rounded-md transition-all hover:bg-white/10",
                    item.active ? "bg-primary text-white" : "text-gray-300"
                  )}
                >
                  <item.icon size={20} />
                  <span className={cn("ml-3 transition-opacity", 
                    collapsed && "opacity-0 hidden"
                  )}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-white/10">
          <div className={cn("flex items-center", collapsed && "justify-center")}>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            {!collapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin</p>
                <p className="text-xs text-gray-400">Teacher</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


import { Search, Bell } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-secondary/30 backdrop-blur-md rounded-xl">
      <h1 className="text-xl font-semibold text-white">Student Dashboard</h1>
      
      {!isMobile && (
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
          <Bell size={20} className="text-gray-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

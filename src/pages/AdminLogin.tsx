
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation
    if (!username || !password) {
      toast.error('Please enter both username and password');
      setIsLoading(false);
      return;
    }
    
    // Simulate authentication (in a real app, this would be an API call)
    setTimeout(() => {
      // For demo purposes, accept any login with "admin" username
      if (username.toLowerCase() === 'admin') {
        toast.success('Successfully logged in!');
        navigate('/');
      } else {
        toast.error('Invalid credentials');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] p-4">
      <div className="glass-card rounded-xl overflow-hidden w-full max-w-md">
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-2xl font-bold">BH</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Bageshree House
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Admin Dashboard Login
          </p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your username"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-primary hover:bg-primary/80 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-blue-400 hover:underline">
              Return to Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;


import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: number;
  className?: string;
}

const StatCard = ({ title, value, icon: Icon, change, className }: StatCardProps) => {
  return (
    <div className={cn("glass-card p-6 rounded-xl", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
          
          {change !== undefined && (
            <div className={cn(
              "text-xs flex items-center mt-2",
              change >= 0 ? "text-green-500" : "text-red-500"
            )}>
              <span>{change >= 0 ? '+' : ''}{change}%</span>
              <span className="ml-1 text-gray-400">from last month</span>
            </div>
          )}
        </div>
        
        <div className="p-3 rounded-lg bg-primary/20 text-primary">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;


import StatCard from './StatCard';
import { User, UserCheck, Award, BookOpen } from 'lucide-react';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Students"
        value="68"
        icon={User}
        change={5.2}
      />
      <StatCard
        title="Attendance Rate"
        value="85%"
        icon={UserCheck}
        change={-2.1}
      />
      <StatCard
        title="Performance"
        value="76%"
        icon={Award}
        change={3.8}
      />
      <StatCard
        title="Subjects"
        value="12"
        icon={BookOpen}
      />
    </div>
  );
};

export default Stats;

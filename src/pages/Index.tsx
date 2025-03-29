
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import Stats from '@/components/dashboard/Stats';
import StudentCard from '@/components/dashboard/StudentCard';
import { students } from '@/data/students';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] text-white">
      <Sidebar />
      
      <div className="ml-0 md:ml-64 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <Header />
          
          {isMobile && (
            <div className="my-4">
              <input
                type="text"
                placeholder="Search students..."
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <Stats />
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Bageshree House Students</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredStudents.map(student => (
                <StudentCard key={student.id} student={student} />
              ))}
              
              {filteredStudents.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-400">
                  <p>No students found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;


import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { students } from '@/data/students';
import { useIsMobile } from '@/hooks/use-mobile';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { format } from 'date-fns';

const Attendance = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");
  const [attendanceData, setAttendanceData] = useState<Record<number, boolean>>({});
  const currentDate = new Date();
  
  // Generating past 5 days for the attendance sheet
  const pastDays = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(currentDate.getDate() - i);
    return date;
  }).reverse();

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markAttendance = (studentId: number, isPresent: boolean) => {
    setAttendanceData(prev => ({
      ...prev,
      [studentId]: isPresent
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] text-white">
      <Sidebar />
      
      <div className="ml-0 md:ml-64 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <Header />
          
          <div className="my-4">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full md:w-1/3 bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="mt-6 glass-card rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Attendance Sheet</h2>
              <div className="text-sm text-gray-400">
                Today: {format(currentDate, 'dd MMM yyyy')}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Module</TableHead>
                    {pastDays.map(day => (
                      <TableHead key={day.toISOString()} className="text-white text-center">
                        {format(day, 'dd MMM')}
                      </TableHead>
                    ))}
                    <TableHead className="text-white text-center">Today</TableHead>
                    <TableHead className="text-white text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id} className="border-white/10">
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.module}</TableCell>
                      
                      {/* Past days attendance (randomly generated) */}
                      {pastDays.map(day => (
                        <TableCell key={day.toISOString()} className="text-center">
                          {Math.random() > 0.2 ? (
                            <span className="inline-flex items-center justify-center bg-green-500/20 text-green-500 rounded-full w-8 h-8">
                              <Check size={16} />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center bg-red-500/20 text-red-500 rounded-full w-8 h-8">
                              <X size={16} />
                            </span>
                          )}
                        </TableCell>
                      ))}
                      
                      {/* Today's attendance */}
                      <TableCell className="text-center">
                        {attendanceData[student.id] === undefined ? (
                          <span className="inline-flex items-center justify-center bg-gray-500/20 text-gray-400 rounded-full w-8 h-8">
                            —
                          </span>
                        ) : attendanceData[student.id] ? (
                          <span className="inline-flex items-center justify-center bg-green-500/20 text-green-500 rounded-full w-8 h-8">
                            <Check size={16} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center bg-red-500/20 text-red-500 rounded-full w-8 h-8">
                            <X size={16} />
                          </span>
                        )}
                      </TableCell>
                      
                      {/* Action buttons */}
                      <TableCell>
                        <div className="flex space-x-2 justify-center">
                          <button 
                            onClick={() => markAttendance(student.id, true)}
                            className="p-2 bg-green-500/20 hover:bg-green-500/40 text-green-500 rounded-md transition-colors"
                          >
                            <Check size={16} />
                          </button>
                          <button 
                            onClick={() => markAttendance(student.id, false)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-500 rounded-md transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {filteredStudents.length === 0 && (
                <div className="text-center py-12 text-gray-400">
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

export default Attendance;

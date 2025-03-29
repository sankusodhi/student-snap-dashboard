
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { students } from '@/data/students';
import { useIsMobile } from '@/hooks/use-mobile';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const Students = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (student.bootcamp && student.bootcamp.toLowerCase().includes(searchTerm.toLowerCase())) ||
    student.module.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h2 className="text-2xl font-semibold mb-4">Students List</h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Module</TableHead>
                    <TableHead className="text-white">English Level</TableHead>
                    <TableHead className="text-white">Email</TableHead>
                    <TableHead className="text-white">Bootcamp</TableHead>
                    <TableHead className="text-white">Attendance</TableHead>
                    <TableHead className="text-white">Performance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id} className="border-white/10">
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.module}</TableCell>
                      <TableCell>{student.englishLevel}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>
                        {student.bootcamp ? (
                          <Badge className={student.bootcamp.includes("React") ? 
                            "bg-blue-500" : "bg-purple-500"}>
                            {student.bootcamp}
                          </Badge>
                        ) : "-"}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            student.attendance > 80 ? 'bg-green-500' : 
                            student.attendance > 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></span>
                          {student.attendance}%
                        </div>
                      </TableCell>
                      <TableCell>{student.performance}%</TableCell>
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

export default Students;

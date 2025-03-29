
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Student } from '@/types/student';

interface StudentCardProps {
  student: Student;
}

const StudentCard = ({ student }: StudentCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group glass-card rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <div className="aspect-square overflow-hidden">
          <img 
            src={student.photo} 
            alt={student.name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-white">{student.name}</h3>
          <p className="text-sm text-gray-400">Roll No: {student.rollNo}</p>
          <div className="mt-2 text-xs flex items-center text-gray-300">
            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
              student.attendance > 80 ? 'bg-green-500' : 
              student.attendance > 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}></span>
            <span>Attendance: {student.attendance}%</span>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-card text-white border-white/20 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{student.name}</DialogTitle>
            <DialogDescription className="text-gray-400">
              Student Profile
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={student.photo} 
                alt={student.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-gray-400">Roll Number</h4>
                  <p>{student.rollNo}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Class</h4>
                  <p>{student.class}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Age</h4>
                  <p>{student.age} years</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Gender</h4>
                  <p>{student.gender}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Contact</h4>
                <p>{student.contact}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Address</h4>
                <p>{student.address}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">About</h4>
                <p className="text-sm">{student.description}</p>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Performance</h4>
                <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${student.performance}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>0%</span>
                  <span>{student.performance}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StudentCard;

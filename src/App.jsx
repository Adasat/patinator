import { useEffect, useState } from 'react'
import './App.css'
import { students } from './students'
import { Card } from './Components/Card'
import { Selectionator } from './Components/Selectionator'

function App() {
  const [students2, setStudents] = useState(students)

  const handleChangeStatus = (name) => {
    // Aquí actualizas el estado del estudiante con el ID dado
    setStudents(prevStudents => {
      return prevStudents.map(student => {
        if (student.name === name) {
          // Cambiar el valor de hasPato por ejemplo
          return { ...student, hasPato: !student.hasPato };
        }
        return student;
      });
    }
    )
  }

  useEffect(() => {
    console.log('students2', students2)
  }, [students2])


  return (
    <>
      <div className='container'>
        {students2?.map((student) => (
          <Card student = {student} key={student.id} onClick={() => handleChangeStatus(student.name)}/>
        ))}
      </div>
      <Selectionator students={students2.filter(student => !student.hasPato)}/>
    </>
  )
}

export default App




export default function StudentList({students,onChange,onClick}){

  return (
   <>
  <h1>Student Details</h1>
 <input type="text" onChange={onChange}/>
 {students.map((student) => (
            <p  onClick={() => onClick(student)}>
              
              <p>{student.name} </p>
            </p>
          ))}
    </>

  )
}


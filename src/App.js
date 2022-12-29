import React from "react";
import "./styles.css";
import {useState} from 'react';
import StudentDetails from "./StudentDetails";
import StudentList from "./StudentList";
export default function App() {
  const studentList = [
    { name: "Arka", roll: 1 },
    { name: "Arindam", roll: 2 },
    { name: "Mrigank", roll: 3 },
    { name: "Sayantani", roll: 4 },
    { name: "pankaj", roll: 5 },
    { name: "biswarup", roll: 6 },
    { name: "supriya", roll: 7 },
    { name: "indrajit", roll: 8 },
    { name: "ilora", roll: 9 },
    { name: "arijit", roll: 10 },
    { name: "chirag", roll: 11 },
    { name: "diksha", roll: 12 }
  ];

  const [students, setStudent] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const handleClick = (student) => setStudent(student);

  const handleChange = (event) => {
    setStudent([]);
    setFilterValue(event.target.value);
  };
  return (
    <div>
      <h1>This is App</h1>
      <StudentList
        students={studentList.filter((student) =>
          student.name.toLowerCase().includes(filterValue.toLowerCase())
        )}
        onClick={handleClick}
        onChange={handleChange}
      />

      <StudentDetails student={students} />
    </div>
  );
}

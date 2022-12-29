export default function StudentDetails({ student }) {
  return (
    <div>
      <h1>Student Details</h1>
      <h1> Name:{student.name}</h1>
      <h1>Roll NO:{student.roll}</h1>
    </div>
  );
}

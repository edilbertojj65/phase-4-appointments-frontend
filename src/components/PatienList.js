import PatienCard from "./PatienCard";



function PatienList({ patients, onDeletePatien, onUpdatePatien }) {
  
  return (
    
    <ul className="cards">
      {patients.map((patient) => {
        return (
           <PatienCard
            key={patient.id}
            patient={patient}
            onDeletePatien={onDeletePatien}
            onUpdatePatien={onUpdatePatien}
          />
        );
      })}
    </ul>
  );
}

export default PatienList;
import Search from "./Search";
import { useEffect, useState } from "react";
// import PatiensForm from "./PatiensForm"
import PatienList from "./PatienList";
 
debugger
function Patients() {
  const [patients, setPatients] = useState([] );
  const [searchTerm, setSearchTerm] = useState("");
 
  useEffect(() => {
    fetch("/patients")
      .then((r) => r.json())
      .then((patientsArray) => {
        setPatients(patientsArray);
      });
  }, [] );

  function handleAddPatien(newPatien) {
    const updatedpatientsArray = [...patients, newPatien];
    setPatients(updatedpatientsArray);
  }

  function handleDeletePatien(id) {
    const updatedpatientsArray = patients.filter((patient) => patient.id !== id);
    setPatients(updatedpatientsArray);
  }

  function handleUpdatePatien(updatedPatie) {
    const updatedpatientsArray = patients.map((patient) => {
      return patient.id === updatedPatie.id ? updatedPatie :patients;
    });
    setPatients(updatedpatientsArray );
  }


  const displayedPatien =  patients.filter((patient) => {
    return patient.user_name.toLowerCase().includes(searchTerm.toLowerCase());
  });
debugger
  return (
    <main>
      
       <PatiensForm onAddPatient={handleAddPatien} />
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       
       <PatienList
        patients={displayedPatien}
        onDeletePatien={handleDeletePatien}
        onUpdatePatien={handleUpdatePatien}
      />
    </main>
  );
}

export default Patients;
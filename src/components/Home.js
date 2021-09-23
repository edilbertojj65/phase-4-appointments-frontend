
import NewAppoForm from "./NewAppoForm";
import AppointmentList from "./AppointmentList";
import Search from "./Search";
import { useEffect, useState } from "react";
 
debugger
function Home() {
  const [appointments, setAppointments] = useState([] );
  const [searchTerm, setSearchTerm] = useState("");
 debugger
  useEffect(() => {
    fetch("/appointments")
      .then((r) => r.json())
      .then((appointmensArray) => {
        setAppointments(appointmensArray);
      });
  }, [] );
debugger
  function handleAddAppo(newAppo) {
    const updatedappointmensArray = [...appointments, newAppo];
    setAppointments(updatedappointmensArray);
  }

  function handleDeleteAppo(id) {
    const updatedappointmensArray = appointments.filter((appoinment) => appoinment.id !== id);
    setAppointments(updatedappointmensArray);
  }

  function handleUpdateAppo(updatedAppo) {
    const updatedappointmensArray = appointments.map((appointment) => {
      return appointment.id === updatedAppo.id ? updatedAppo : appointment;
    });
    setAppointments(updatedappointmensArray);
  }


  const displayedAppoint = appointments.filter((appointment) => {
    return appointment.name_patient.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
       <NewAppoForm onAddAppointment={handleAddAppo} />
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       
       <AppointmentList
        appointments={displayedAppoint}
        onDeleteAppo={handleDeleteAppo}
        onUpdateAppo={handleUpdateAppo}
      />
    </main>
  );
}

export default Home;

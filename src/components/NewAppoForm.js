import { useState } from "react";
debugger
function NewAppoForm({  onAddAppointment }) {
  
  const [name_patient, setName] = useState("");
  const [last_namePatient, setLastName] = useState("");
  const [name_physician, setPhysician] = useState("");
  const [last_namePhysician, setLastNamePhy] = useState("");
  const [appointments_date, setDate] = useState("");
  const [appointments_time, setTime] = useState("");
  const [status, setStatus] = useState("");

debugger
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name_patient: name_patient,
        last_namePatient: last_namePatient,
        name_physician: name_physician,
        last_namePhysician: last_namePhysician,
        appointments_date: appointments_date,
        appointments_time: appointments_time,
        status: status,
      }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
      } 
       return null;
     
      }).then((newAppo) => onAddAppointment(newAppo));
  }
debugger
  return (
    <div className="new-appo-form">
      <h2>New appoinment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name_patient"
          placeholder="Patient Name"
          value={name_patient}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="last_namePatient"
          placeholder="Patient Last Name"
          value={last_namePatient}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="name_physician"
          placeholder="Physician Name"
          value={name_physician}
          onChange={(e) => setPhysician(e.target.value)}
        />
        <input
          type="text"
          name="last_namePhysician"
          placeholder="Physician Last Name"
          value={last_namePhysician}
          onChange={(e) => setLastNamePhy(e.target.value)}
        />
        <input
          type="date"
          name="appointments_date"
          placeholder="Appointment Date"
          value={appointments_date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="Time"
          name="appointments_time"
          placeholder="Appointment Time"
          value={appointments_time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Add appoinment</button>
      </form>
    </div>
  );
}

export default NewAppoForm;
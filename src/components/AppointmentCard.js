import { useEffect, useState } from "react";

function AppointmentCard({ appointment, onDeleteAppo, onUpdateAppo }) {
    const { id, name_patient, last_namePatient, name_physician, last_namePhysician, appointments_date, appointments_time :appoint_time, status} = appointment;
    
  debugger
    function handleDeleteClick() {
      fetch(`/appointments/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteAppo(id);
        }
      });
    }
  
    function handleIsInStockClick() {
      fetch(`/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((r) => r.json())
        .then((updatedAppo) => {
          onUpdateAppo(updatedAppo);
        });
    }
  
    return (
      <li className="card">
        {/* <img src={image} alt={name} /> */}
        <h4>Doctor: {name_physician} {last_namePhysician}</h4>
        <p>Patient: {name_patient} {last_namePatient}</p>
        <p> Date:   {appointments_date}</p>
        <p> Time:   {appoint_time}</p>

        <p> status: {status}</p>
        {appointments_date ? (
          <button className="primary" onClick={handleIsInStockClick}>
            
            Confirmed
          </button>
        ) : (
          <button onClick={handleIsInStockClick}>Out of Date</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default  AppointmentCard;
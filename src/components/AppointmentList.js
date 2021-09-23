
 import AppointmentCard from "./AppointmentCard";



function AppointmentList({ appointments, onDeleteAppo, onUpdateAppo }) {
  
  return (
    
    <ul className="cards">
      {appointments.map((appointment) => {
        return (
           <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onDeleteAppo={onDeleteAppo}
            onUpdateAppo={onUpdateAppo}
          />
        );
      })}
    </ul>
  );
}

export default AppointmentList;
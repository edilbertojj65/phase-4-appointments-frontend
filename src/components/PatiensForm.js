import { useState } from "react";


function PatientsForm({onAddPatient}) {
  
  debugger
  
  const [user_name,     setUser] = useState("");
  const [last_name, setLastName] = useState("");
  const [email,        setEmail] = useState("");
  const [image,        setImage] = useState("");
  const [phone_number, setPhone] = useState("");
  
    
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/patients" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: user_name,
        last_name: last_name,
        email: email,
        image: image,
        phone_number: phone_number,
        
      }),
    } ) 
      .then((r) => {
        debugger
        if (r.ok) {
          return r.json();
      } 
       return null;
      }).then((newPatien) => onAddPatient((newPatien)));
  }

    

  return (
    <div className="new-appo-form">
      <h2>New Patients</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Patient Name"
          value={user_name}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Url image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="phone Number"
          value={phone_number}
          onChange={(e) => setPhone(e.target.value)}
        />
        
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default PatientsForm;
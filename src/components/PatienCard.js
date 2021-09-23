function PatienCard({ patients, onDeletePatien, onUpdatePatien }) {
    const { id, user_name, last_name, email, image, phone_number} = patients;
   
   
    function handleDeleteClick() {
      fetch(`/patients/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
            onDeletePatien(id);
        }
      });
    }
  
    function handleIsInStockClick() {
      fetch(`/patients/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((r) => r.json())
        .then((updatedPatien) => {
         onUpdatePatien(updatedPatien);
        });
    }
  
    return (
      <li className="card">
        <img src={image} alt={user_name} />
        <h4>Patient: {user_name} {last_name}</h4>
        <p>Email: {email} </p>
        <p> Phone: {phone_number}</p>
        
        {phone_number ? (
          <button className="primary" onClick={handleIsInStockClick}>
            In Date
          </button>
        ) : (
          <button onClick={handleIsInStockClick}>Out of Date</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default  PatienCard;
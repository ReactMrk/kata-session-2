import { useEffect } from "react";

const ClientList = ({ clients, setHomeAlertText }) => {
  const showHomeAlert = (timeout, text) => {
    setHomeAlertText(text);
    setTimeout(() => {
      setHomeAlertText("");
    }, timeout);
  };

  useEffect(() => {
    if (clients.length > 0) {
      setHomeAlertText("New client added");
      setTimeout(() => {
        setHomeAlertText("");
      }, 2000);
    }
  }, [clients]);

  useEffect(() => {
    showHomeAlert(3000, "Welcome to the Client List");
    return () => {
      showHomeAlert(3000, "Goodbye");
    }
  }, []);
    
  return (
    <ul className="client-list">
      {
        clients.map(client => {
          return (
            <li key={client.email}>
              <strong>{client.name}</strong><br/>
              <span>Email: {client.email}</span><br/>
              <span>Phone: {client.phone}</span><br/>
              <span>Address: {client.address}</span><br/>
            </li>
          )
        })
      }
    </ul>
  );
};

export default ClientList;

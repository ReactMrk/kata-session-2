import { useState } from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  return (
    <>
      <ClientForm setClients={setClients}/>
      <ClientList clients={clients}/>
    </>
  )
};

export default ClientManagement;
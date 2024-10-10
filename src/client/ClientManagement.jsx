import { useState } from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";
import Alert from "./Alert";

const CustomerManagement = () => {
  const [clients, setClients] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [homeAlertText, setHomeAlertText] = useState("");
  const [homeAlertVisible, setHomeAlertVisible] = useState(false);
  const handleLogin = (loggedIn) => () => {
    !loggedIn && setClients([]);
    setLoggedIn(!loggedIn);
  }
  return (
    <>
      <button onClick={handleLogin(loggedIn)}>{loggedIn ? "Log out" : "Log in"}</button>
      <Alert visible={homeAlertVisible} text={homeAlertText}/>
      {loggedIn && (
        <>
          <ClientForm setClients={setClients}/>
          <ClientList clients={clients} setHomeAlertVisible={setHomeAlertVisible} setHomeAlertText={setHomeAlertText} />
        </>
      )}
    </>
  )
};

export default ClientManagement;
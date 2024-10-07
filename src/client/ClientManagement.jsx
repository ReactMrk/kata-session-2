import {useState} from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";
import Alert from "./Alert";

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [homeAlertText, setHomeAlertText] = useState("");
  const handleLogin = loggedIn => () => {
    // !loggedIn && setClients([]);
    setLoggedIn(!loggedIn);
  };
  return (
    <>
      <button onClick={handleLogin(loggedIn)}>{loggedIn ? "Log out" : "Log in"}</button>
      <Alert homeAlertText={homeAlertText}/>
      {loggedIn && (
        <>
          <ClientForm setClients={setClients}/>
          <ClientList clients={clients} setHomeAlertText={setHomeAlertText} />
        </>
      )}
    </>
  )
};

export default ClientManagement;
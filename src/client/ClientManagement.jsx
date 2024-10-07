import {useState} from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";
import HomeAlerts from "./HomeAlerts";

const ClientManagement = () => {
    const [clients, setClients] = useState([]);
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        <>
            <button onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"}</button>
            {loggedIn && (
                <>
                    <HomeAlerts visible={true} text={"Welcome to Client Management"}/>
                    <ClientForm setClients={setClients}/>
                    <ClientList clients={clients}/>
                </>
            )}
        </>
    )
};

export default ClientManagement;
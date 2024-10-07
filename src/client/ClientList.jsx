import {useEffect, useState} from "react";
import Alert from "./Alert";

const ClientList = ({clients, setHomeAlertText, setHomeAlertVisible}) => {
    const [clientAlert, setClientAlert] = useState(false);
    const showHomeAlert = (timeout, text)=> {
        setHomeAlertText(text);
        setHomeAlertVisible(true);
        setTimeout(() => {
            setHomeAlertVisible(false);
        }, timeout);
    };

    useEffect(() => {
        if (clients.length > 0) {
            setClientAlert(true);
            setTimeout(() => {
                setClientAlert(false);
            }, 2000);
        }
    }, [clients])

    useEffect(() => {
        showHomeAlert(3000, "Welcome to the Client List")
        return ()=> {
            showHomeAlert(3000, "Goodbye")
        }
    }, []);
    

    
    return (
        <>
            <Alert visible={clientAlert} text={"New client has been added"}/>
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
        </>
    );
};

export default ClientList;
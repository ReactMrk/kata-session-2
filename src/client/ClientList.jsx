import {useEffect, useState} from "react";
import Alert from "./Alert";

const ClientList = ({clients}) => {
    const [clientAlert, setClientAlert] = useState(false);
    useEffect(() => {
        if (clients.length > 0) {
            setClientAlert(true);
            setTimeout(() => {
                setClientAlert(false);
            }, 2000);
        }
    }, [clients])
    return (
        <>
            <Alert visible={clientAlert} text={" New client has been added "}/>
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
const ClientList = ({clients}) => {
    return (
        <>
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
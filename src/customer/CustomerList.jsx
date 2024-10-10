import { useEffect } from "react";

const CustomerList = ({ customers, setHomeAlertText }) => {
  const showHomeAlert = (timeout, text) => {
    setHomeAlertText(text);
    setTimeout(() => {
      setHomeAlertText("");
    }, timeout);
  };

  useEffect(() => {
    if (customers.length > 0) {
      setHomeAlertText("New client added");
      setTimeout(() => {
        setHomeAlertText("");
      }, 2000);
    }
  }, [customers]);

  useEffect(() => {
    showHomeAlert(3000, "Welcome to the Client List");
    return () => {
      showHomeAlert(3000, "Goodbye");
    }
  }, []);

  return (
    <ul className="customer-list">
      {
        customers.map(customer => {
          return (
            <li key={customer.email}>
              <strong>{customer.name}</strong><br/>
              <span>Email: {customer.email}</span><br/>
              <span>Phone: {customer.phone}</span><br/>
              <span>Address: {customer.address}</span><br/>
            </li>
          )
        })
      }
    </ul>
  );
};

export default CustomerList;
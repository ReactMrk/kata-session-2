import { useEffect, useState } from 'react';
import Alert from './Alert';

const CustomerList = ({ customers, setHomeAlertText, setHomeAlertVisible }) => {
  const [showCustomerAlert, setShowCustomerAlert] = useState(false);
  const showHomeAlert = (timeout, text)=> {
    setHomeAlertText(text);
    setHomeAlertVisible(true);
    setTimeout(() => {
      setHomeAlertVisible(false);
    }, timeout);
  };

  useEffect(() => {
    if (customers.length > 0) {
      setShowCustomerAlert(true);
      setTimeout(() => {
        setShowCustomerAlert(false);
      }, 2000);
    }
  }, [customers])

  useEffect(() => {
    showHomeAlert(3000, "Welcome to the Client List")
    return ()=> {
      showHomeAlert(3000, "Goodbye")
    }
  }, []);

  return (
    <>
      <Alert visible={showCustomerAlert} text={"New client has been added"}/>
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
    </>
  );
};

export default CustomerList;
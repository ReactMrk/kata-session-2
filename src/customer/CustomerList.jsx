const CustomerList = ({ customers }) => {
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
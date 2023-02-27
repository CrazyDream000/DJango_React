import React, { Component, useState } from 'react';
import CustomersService from './CustomersService';

const customersService = new CustomersService();

function CustomerCreateUpdate(props)
{
  const initialState = {
    pk:"",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  };

  const [crud, setCrud] = useState(initialState);

  function handleChange(event) 
  {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCreate()
  {
    customersService.createCustomer(crud)
    .then((result)=>{
      alert("Customer created!");
    }).catch(()=>{
      alert('There was an error! Please re-check your form.');
    });
  }
  function handleUpdate(pk)
  {
    customersService.updateCustomer(crud    
    ).then((result)=>{
      console.log(result);
      alert("Customer updated!");
    }).catch(()=>{
      alert('There was an error! Please re-check your form.');
    });
  }
  function handleSubmit(event)
  {
    console.log(props);
    console.log(crud);
    handleCreate();
    event.preventDefault();
  }
  return (
    <form>
    <div className="form-group">
      <label>
        First Name:</label>
        <input className="form-control" type="text" name="firstName" value={crud.firstName} onChange={handleChange}/>
      
      <label>
        Last Name:</label>
        <input className="form-control" type="text" name="lastName" value={crud.lastName} onChange={handleChange}/>
      
      <label>
        Phone:</label>
        <input className="form-control" type="text" name="email" value={crud.email} onChange={handleChange} />
      
      <label>
        Email:</label>
        <input className="form-control" type="text" name="phone" value={crud.phone} onChange={handleChange} />
      
      <label>
        Address:</label>
        <input className="form-control" type="text" name="description" value={crud.description} onChange={handleChange} />
      
      <label>
        Description:</label>
        <textarea className="form-control"></textarea>
        

      <input className="btn btn-primary" type="button" value="Submit" onClick={handleSubmit}/>
      </div>
    </form>
  );
}


export default CustomerCreateUpdate;

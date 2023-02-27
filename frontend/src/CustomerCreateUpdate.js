import React, { Component } from 'react';
import CustomersService from './CustomersService';

const customersService = new CustomersService();

class CustomerCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const {  params } = this.props;
        if(params && params.pk)
        {
          customersService.getCustomer(params.pk).then((c)=>{
            this.firstName.current.value = c.first_name;
            this.lastName.current.value = c.last_name;
            this.email.current.value = c.email;
            this.phone.current.value = c.phone;
            this.address.current.value = c.address;
            this.description.current.value = c.description;
          })
        }
      }

      handleCreate(){
        customersService.createCustomer(
          {
            "first_name": this.firstName.current.value,
            "last_name": this.lastName.current.value,
            "email": this.email.current.value,
            "phone": this.phone.current.value,
            "address": this.address.current.value,
            "description": this.description.current.value
        }          
        ).then((result)=>{
          alert("Customer created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        customersService.updateCustomer(
          {
            "pk": pk,
            "first_name": this.firstName.current.value,
            "last_name": this.lastName.current.value,
            "email": this.email.current.value,
            "phone": this.phone.current.value,
            "address": this.address.current.value,
            "description": this.description.current.value
        }          
        ).then((result)=>{
          console.log(result);
          alert("Customer updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const {  params } = this.props;
        console.log(params);
        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }
    
      render() {
        return (
          <form >
          <div className="form-group">
            <label>
              First Name:</label>
              <input className="form-control" type="text" ref='firstName' />
            
            <label>
              Last Name:</label>
              <input className="form-control" type="text" ref='lastName'/>
            
            <label>
              Phone:</label>
              <input className="form-control" type="text" ref='phone' />
            
            <label>
              Email:</label>
              <input className="form-control" type="text" ref='email' />
            
            <label>
              Address:</label>
              <input className="form-control" type="text" ref='address' />
            
            <label>
              Description:</label>
              <textarea className="form-control" ref='description' ></textarea>
              

            <input className="btn btn-primary" type="submit" value="Submit" onClick={this.handleSubmit}/>
            </div>
          </form>
        );
      }  
}

export default CustomerCreateUpdate;  
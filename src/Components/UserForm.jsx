import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails.jsx';
import FormPersonalsDetails from './FormPersonalDetails.jsx';
import Confirm from './Confirm.jsx';
import Success from './Success.jsx';

export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        city:'',
        occupation:''
    }

    // proceeds to next step
    nextStep=()=> {
       const{step}  = this.state;
       this.setState({
           step:step+1
       });
    }
// proceeds to previous step

    prevStep=()=> {
        const{step}  = this.state;
        this.setState({
            step:step-1
        });
     }

     // Handle fields change
     handleChange=input => e => {
         this.setState({[input]:e.target.value});
     }
    
    render() {
        const{ step } = this.state;
        const { firstName, lastName,email,city,occupation} = this.state;
       const values = { firstName, lastName,email,city,occupation }

       switch(step){
           case 1:
        return (
           <FormUserDetails 
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values={values}
           />
        );
        case 2:
            
        return (
           <FormPersonalsDetails
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               values={values}
           />
        );
        case 3:
            return (
                <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
             );
        case 4:
            
            return(
            <Success />
            );
    }
  }
}

export default UserForm


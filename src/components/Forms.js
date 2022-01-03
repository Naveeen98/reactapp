import React, { Component } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Review from './Review'

export default class Forms extends Component {
  constructor(props){
    super(props)
    this.state = {
    step: 1,
    firstName: '',
    lastName: '', 
    email: '',
    college: '',
    aggregate:'',
    education: '',
    skills: '',
    hobbies:'',
    state: '',
    country: '',
   
  }
    this.onCancel = this.onCancel.bind(this)
  }
  clearData(){
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      college: '',
      aggregate:'',
      education: '',
      skills: '',
      hobbies:'',
      state: '',
      country: '',
    })
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  onCancel(e){
    e.preventDefault()
    //alert("Cancel")
    this.clearData()
  }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, college,aggregate, education, skills,hobbies, state, country} = this.state;
        const values = { firstName, lastName, email, college,aggregate, education, skills,hobbies, state,country}
        
 switch (step) {
  case 1: 
    return (
      <Form1
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            onCancel={this.onCancel}
            values={ values } />
    )
  case 2: 
    return (
      <Form2
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            onCancel={this.onCancel}
            values={ values } />
    )
    case 3: 
          return (
            <Review 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
    default:
        //do nothing
    }
    }
}


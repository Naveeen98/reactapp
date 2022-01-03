import React from 'react'
import './Form.css'

const Review = ({ prevStep, values }) => {
  const { firstName, lastName, email, college, aggregate, education, skills, hobbies, state, country } = values
  
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  return(
      <div className="reviewstyle">
        <h2>Review your details</h2>
          First Name : {firstName} <br/><br/>
          Last Name : {lastName} <br/><br/>
          Email : {email} <br/><br/>
          College : {college} <br/><br/>
          Aggregate : {aggregate} <br/><br/>
          Graduation : {education} <br/><br/>
          Skills : {skills} <br/><br/>
          Hobbies : {hobbies} <br/><br/>
          State : {state} <br/><br/>
          Country : {country} <br/><br/>
           <input type="button" onClick={ Previous} value="Previous" />
      </div>
  )
}

export default Review

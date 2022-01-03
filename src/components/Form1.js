import React from 'react'
import './Form.css'

const Form1 = ({ nextStep, handleChange , values, onCancel }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
 

  return (
      <div>
        <h1>Welcome Naveen!</h1>
          <form className="formbtn">
            <p>
              <label className="labelstyle">First Name &nbsp;</label>
                <input 
                 type="text" className="formbtn"
                    placeholder="Enter your first name" 
                    value={values.firstName} 
                    onChange={handleChange('firstName')}
                    />
                    </p>
                    <p>
                    <label className="labelstyle">Last Name &nbsp;</label>
                <input 
                 type="text" className="formbtn"
                    placeholder="Enter your last name" 
                    value={values.lastName} 
                    onChange={handleChange('lastName')}
                    />
                </p >
                <p>
                <label className="labelstyle">Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>
                <input 
                 type="text" className="formbtn"
                    placeholder="Enter your email" 
                    value={values.email} 
                    onChange={handleChange('email')}
                    />
                    </p >
                    <p>
                    <label className="labelstyle">College &nbsp; &nbsp; &nbsp;</label>
                <input type="text" className="formbtn"
                    placeholder="Enter your college" 
                    value={values.college} 
                    onChange={handleChange('college')}
                    />
                    </p>
                    <p>
                    <label className="labelstyle">Aggregate &nbsp;</label>
                <input type="text" className="formbtn"
                    placeholder="cgpa or %"
                    value={values.aggregate} 
                    onChange={handleChange('aggregate')}
                    />
                    </p>
                    <input type="button" onClick={onCancel}  value="Reset" /> &nbsp;
                    <input type="button"  onClick={Continue} value="Next" />
          </form>
      </div>
  )
}

export default Form1

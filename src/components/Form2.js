import React from 'react'
import './Form.css'

const Form2 = ({ prevStep, nextStep,  handleChange, values, onCancel}) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  


  return(
      <div>
          <form>
            <h3>Please Provide below details</h3>
            <p>
            <label className="labelstyle">Graduation &nbsp; </label>
                <input 
                 type="text" className="formbtn"
                    placeholder="level of education" 
                    value={values.education} 
                    onChange={handleChange('education')}
                    />
                    </p>
                    <p>
              <label className="labelstyle">Skills &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>
                <input 
                 type="text" className="formbtn"
                    placeholder="Mention your skills" 
                    value={values.skills} 
                    onChange={handleChange('skills')}
                    />
                    </p> 
                    <p>
                    <label className="labelstyle">Hobbies &nbsp; &nbsp; </label>
                <input 
                 type="text" className="formbtn"
                    placeholder="Mention your hobbies" 
                    value={values.hobbies} 
                    onChange={handleChange('hobbies')}
                    />
                    </p>
                    <p>
                    <label className="labelstyle">State &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <input 
                 type="text" className="formbtn"
                    placeholder="your state" 
                    value={values.state} 
                    onChange={handleChange('state')}
                    />
                    </p>
                    <p>
                    <label className="labelstyle">Country &nbsp; &nbsp; </label>
                <input 
                 type="text" className="formbtn"
                    placeholder="your country" 
                    value={values.country} 
                    onChange={handleChange('country')}
                    />
                    </p>
                    
                    <input type="button" onClick={ Previous} value="Previous" /> &nbsp; &nbsp; &nbsp;
                    <input type="button" onClick={ Continue} value="Next" /> <br/> <br/>
                    <input type="button" onClick={onCancel}  value="Reset" />
          </form>
      </div>
  )
}

export default Form2

import React, { useState } from 'react';


const MyForm = ({makeMadlib}) => {
  const initialState ={noun: "", noun1:"", adjective:"", color:""}
  const [formData, setFormData] = useState({initialState})
  
  
  const handleChange = (e) => {
    const {name, value} = e.target;
  setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
      
      
  const handleSubmit= (e) => {e.preventDefault();
  makeMadlib(formData.noun, formData.noun1, formData.adjective, formData.color)
  setFormData(initialState)

}
    return (
        <>
        <form className='main-event' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="noun">Noun:</label>
          <input id= "noun" type="text" placeholder= "noun" name = 'noun' value= {formData.noun} onChange= {handleChange}/>
        </div>
        <div>
        <label htmlFor="noun1">Noun1:</label>
          <input id= "noun1" type="text" placeholder= "noun1" name = 'noun1' value= {formData.noun1} onChange= {handleChange}/>
          </div>
          <div>
          <label htmlFor="adjective">Adjective:</label>
        <input id= 'adjective' type="text" placeholder= "adjective" name = 'adjective' value= {formData.adjective} onChange= {handleChange}/>
          </div>
        <div>
        <label htmlFor="color">Color:</label>
        <input id ="color" type="text" placeholder= 'color' name = 'color' value= {formData.color} onChange= {handleChange}/>
        </div>
      </form>
      <button>Tell me a Story</button>
{/* 
      <h2> {formData.noun} was with {formData.noun1} and they were very {formData.adjective}. Their favorite color is {formData.color}
</h2> */}


    </>
    )
    }



  export {MyForm}
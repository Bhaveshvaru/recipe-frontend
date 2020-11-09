import React, { useState } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useHistory }from "react-router-dom";

function RecipeForm() {
  const history = useHistory();
  const [recipe, setRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [calorie, setCalorie] = useState('');
  const [cuisine,setCuisine]=useState("")
  const [image, setImage] = useState('');
  const [dob,setDob]=useState("");
  const [prep,setPrep]=useState("");
  const [radio,setRadio]=useState("")

  const [ingriedient,setIngriedient]=useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handlerecipename = (event) => {
    setRecipe(event.target.value);
  };
  const handleCalories = (event) => {
    setCalorie(event.target.value);
    
  };
  const handleCuisine=(event)=>{
    setCuisine(event.target.value);
  }

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };

  const handleDOB=(event)=>{
    setDob(event.target.value)
    console.log("date",event.target.value)
  }

  const handleIngriedient=(event)=>{
    setIngriedient(event.target.value);
  }

  const handleprep=(event)=>{
   setPrep(event.target.value)
  };
  const handleRadio=(event)=>{
   setRadio(event.target.value)
  }
   const handleClick=()=>{
    let formData = new FormData();
    formData.append("recipename",recipe);
    formData.append("cuisinetype",cuisine);
    formData.append("recipetype",radio);
    formData.append("description",description);
    formData.append("calories",calorie);
    formData.append("recipedate",dob);
    formData.append("ingredient",ingriedient);
    formData.append("preparationtime",prep);
    formData.append("photo",image);

      axios({
        method: 'post',
        url: 'http://localhost:4000/api/recipe/create',
        data: formData,
        })
        .then((data) => {
          window.alert("Recipe added Successfully!")
          history.push("/");
        })
        .catch((err) => {
          console.log("errorMsg",err.message);
          window.alert(`${err.message}`)
        });
   }
  return (
    <div >
         <div className="nav-bar">
         <nav className="navbar navbar-expand-lg bg-dark">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" style={{color:"white"}} href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a  className="nav-link"style={{color:"white"}} Link="AddRecipe"><Link to="/AddRecipe">Add recipe</Link> <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a  className="nav-link"style={{color:"white"}} Link="Search"><Link to="/Search">Search recipe</Link> <span class="sr-only">(current)</span></a>
            </li>
           </ul>
          </nav>
       </div>
             <div className="container" style={{marginTop:"20px",paddingBottom:"2rem"}}>
              <form onSubmit={handleSubmit} encType="multipart/form-data" novalidate>
                <h3 className="m-3">Add Recipe</h3>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Recipe Name:</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" onChange={handlerecipename} required/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputusername">Description:</label>
                    <textarea onChange={handleDescription} className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputusername">Calories:</label>
                    <input type="text" className="form-control"  aria-describedby="userHelp" onChange={handleCalories} required/>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Cuisine Type</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={handleCuisine} required>
                      <option>Italian</option>
                      <option>Mexican</option>
                      <option>South Indian</option>
                    </select>
                  </div>

                  <label style={{paddingRight:"10px"}} for="inlineRadio1">Recipe Type</label>
                  <div className="form-check form-check-inline" onChange={handleRadio} >
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Veg" required/>
                  <label className="form-check-label" for="inlineRadio1">Veg</label>
                </div>
                <div className="form-check form-check-inline" onChange={handleRadio}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Non-Veg" required/>
                  <label className="form-check-label" for="inlineRadio2">Non-Veg</label>
                </div>
                  <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker">
                    <label for="example">Select Recipe  Date:</label>
                    <input placeholder="Select date" type="date" id="example" className="form-control"  onChange={handleDOB} required/>
                  <i className="fas fa-calendar input-prefix" ></i><br/></div>
                  <div className="form-group">
                    <label for="exampleFormControlFile1">Upload Recipe image:</label>
                    <input type="file" className="form-control-file"  name="photo" onChange={handleImage} required/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputusername">Ingredient and Quantity:</label>
                    <input type="text" className="form-control" onChange={handleIngriedient} required/>
                  </div>

                  <div className="md-form md-outline">
                  <label for="default-picker">Preparation Time</label>
                  <input type="time" className="form-control" placeholder="Select time" onChange={handleprep} required/>  
                </div>
                  <br/>
                  <button  type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
                    </form>
             </div>
         </div>
  );
}

export default RecipeForm;

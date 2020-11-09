import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "../index.css"

const Search =()=>{
    const [searchData,setSearchData]=useState("");
    const [item,setItems]=useState([])

    const handleSubmit=(event)=>{
        setSearchData(event.target.value);
        event.preventDefault();
    }
 
    const search=()=>{
        axios.get(`http://localhost:4000/api/recipe/getName?recipename=${searchData}`)
        .then((data)=>{
            setItems(data.data);
            console.log(data.data);
        })
        .catch((err)=>{
            console.log(err)
    
        })
    }
   
    useEffect(()=>{
        search();
    },[searchData]);

    const cardss= item.map((item) => {
        return (
          <div  key={item.id}>   
          <div >
              <div style={{margin:"3rem",paddingLeft:"18rem"}} className="css-cards">
                 <div className="card" style={{width:"25rem"}}>
                  <img className="card-img-top" style={{height:"16rem"}} src={`http://localhost:4000/uploads/${item.photo}`} alt="Card image cap"/>
                   <div className="card-body">
                       <h5 className="card-title">{item.recipename}</h5>
                         <p className="card-text">Description: {item.description}.</p>
                              </div>
                              <ul className="list-group list-group-flush">
                           <li className="list-group-item">Calories: {item.calories}</li>
                            <li className="list-group-item">Cuisine type: {item.cuisinetype}</li>
                            <li className="list-group-item">Recipe type: {item.recipetype}</li>
                            <li className="list-group-item">Ingredient: {item.ingredient}</li>
                            <li className="list-group-item">Preparation time: {item.preparationtime}</li>
                            <li className="list-group-item">Recipe date: {item.recipedate.slice(0,10)}</li>
                          </ul>
                        </div>
                    </div>
                </div>
          </div>
        )
      })
    
    



    return(
    <div >
          <nav className="navbar navbar-expand-lg bg-dark">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a  className="nav-link" Link="AddRecipe"><Link to="/AddRecipe">Add recipe</Link> <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a  className="nav-link" Link="Search"><Link to="/Search">Search recipe</Link> <span class="sr-only">(current)</span></a>
            </li>
            </ul>
            </nav>
        <h3  className="m-4 text-center ">
            Search Any Recipe...
        </h3 >
        <div className=" container md-form active-cyan active-cyan-2 mb-3">
  <input className="form-control" type="text" placeholder="Search Recipe" aria-label="Search"
  onChange={handleSubmit}
  />
  <div>
  {cardss}
  </div>
</div>

    </div>
    )
};

export default Search;

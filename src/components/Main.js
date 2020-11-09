import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import "../index.css"

const Main =()=>{
  const [posts,setPosts]=useState([]);
  const [page,setPage]=useState(1);
  const [data,setData] = useState([]);

    const fetchapi=()=>{
        axios.get(`http://localhost:4000/api/recipe/get?page=${page}&limit=10`)
        .then(data=>{
            setData(data.data);
            setPosts(data.data);
        })
        .catch(e=>{
            console.log("error",e);
        })
    }
    useEffect(()=>{
        fetchapi()
    },[page,data])

    const handlepagination=(event)=>{
     setPage(event.target.value);
    };

    const handleRemove=(id)=>{
        console.log("id elemetn",id);
        axios.delete(`http://localhost:4000/api/recipe/delete/${id}`)
        .then(()=>{
            window.alert("Recipe Was Deleted!")
        })
        .catch((err)=>{
            console.log(err)
        })
    };

    

       const cardss= data.map((item, index) => {
            return (
              <div  key={index}>   
              <div >
                  <div style={{margin:"3rem"}} className=" carddeck">
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

                                <button className="btn btn-default btn-sm" type="button" onClick={() => handleRemove(item._id)}>Delete</button>
                              </ul>
                            </div>
                            
                        </div>
                    </div>
              </div>
            )
          })
        return(
     <>
            <div className="">
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
            <h1 className="text-center">Recipes</h1>
        <div className="css-cards"> {cardss}</div>
            <div className="container " style={{marginLeft:"45rem"}}>
               <ul className="pagination pagination-lg" >
                 <li className="page-item page-link" value={1} onClick={handlepagination}>1</li> 
                 <li className="page-item page-link" value={2} onClick={handlepagination}>2</li> 
                 <li className="page-item page-link" value={3} onClick={handlepagination}>3</li> 
                 <li className="page-item page-link" value={4} onClick={handlepagination}>4</li> 
                 <li className="page-item page-link" value={5} onClick={handlepagination}>5</li> 
                 <li className="page-item page-link" value={5} onClick={handlepagination}>6</li> 
                </ul>
            </div>
        </div>
     </>
        )
        }

export default Main;
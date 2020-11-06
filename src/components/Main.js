import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import ReactPaginate from 'react-paginate';
import "../index.css"

const Main =()=>{
  const [posts,setPosts]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(10);

    const [data,setData] =useState([]);
    const fetchapi=()=>{
        axios.get("http://localhost:4000/api/recipe/get?page=1&limit=10")
        .then(data=>{
            setData(data.data);
            console.log("apidata",data.data)
        })
        .catch(e=>{
            console.log("error",e);
        })
    }

    useEffect(()=>{
        fetchapi()
    },[])

   
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
                              </ul>
                            </div>
                        </div>
                    </div>
              </div>
            )
          })
        return(

            <>
            <div className="nav-bar">
            <nav className="navbar navbar-expand-lg bg-dark">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" style={{color:"white"}} href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a  className="nav-link"style={{color:"white"}} Link="AddRecipe"><Link to="/AddRecipe">Add recipe</Link> <span class="sr-only">(current)</span></a>
            </li>
            </ul>
            </nav>
        </div>
            <h1 className="text-center">Recipes</h1>
        <div className="css-cards"> {cardss}</div>
        <div className="container " style={{marginLeft:"45rem"}}>
           <ul className="pagination pagination-lg"  >
                <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a onChange={handlepagination}  class="page-link" href="#">1</a ></li>
                <li className="page-item"><a onChange={handlepagination} class="page-link " href="#">2</a></li>
                <li className="page-item"><a onChange={handlepagination} class="page-link" href="#">3</a></li>
                <li className="page-item"><a onChange={handlepagination} class="page-link" href="#">Next</a></li>
           </ul>
    </div>
            </>
        )
        }

export default Main;
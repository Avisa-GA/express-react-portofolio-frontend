import React from "react";
import {useState, useEffect} from "react";


function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);
  
 
 

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
     //create function to make api call
    const getProjectsData = async () => {
      //make api call and get response
      const response = await fetch(props.URL + "projects");
      // turn response into javascript object
      const data = await response.json();
      // set the projects state to the data
      setProjects(data);
    };
    getProjectsData()
  },
   []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project, index) => (
      
      
    <div style={{
      marginLeft: "30%"}} className="row" key={index}>
      <div class="col s12 m7">
      <div class="card">
      <div class="card-image">
         <img src={project.image} />
         <span style={{fontWeight: "bold", marginLeft: "60%", color: "yellow"}}  class="card-title">{project.name}</span>
         </div>
         <div class="card-action">
         
         </div>
         <a href={project.git}>
           Github
         </a>
         <br />
         <a href={project.live}>
           live site
         </a>
         </div>
         </div>  
    </div>
    ));
  }

    return projects ? loaded() : <h1>Loading...</h1>;
  }
  
  export default Projects;
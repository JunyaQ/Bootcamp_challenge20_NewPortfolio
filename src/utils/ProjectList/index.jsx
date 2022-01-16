
import React, { useState } from 'react';

function ProjectList(){
    const [project] =useState([
        {
          project_name: 'Photo Gallary',
          description:
            'This is a web show photo something description of the porject something description of the porject something description of the porject something description of',
          webpage: 'https://github.com/JunyaQ/photoGallery',
        },
        {
          project_name: 'project2',
          description: 
          'here is some project 222222 description something something',
          webpage: 'https://github.com/JunyaQ/photoGallery',
        },
        {
          project_name: 'project3',
          description: 
          'here is some project 333333 description something something',
          webpage: 'https://github.com/JunyaQ/photoGallery',
        }
    ])
        //project.map((image,i)
        const [ProjectList, setList] = React.useState(project);
      return(
      <div>
         
      {ProjectList.map((project) => (
        <div>
        <p className="project_name">{project.project_name}</p>
        <p className="project_description">{project.description}</p>
        <a href={project.webpage}><p>view the Project</p></a>
        <img src={require(`../../assets/projects/projectimage.png`)}></img>
        </div>

       
        
      ))
      }

      </div>
  );
};
     
export default ProjectList;
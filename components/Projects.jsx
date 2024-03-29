"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../app/globals.css";

const Projects = () => {
  const [error, setError] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:1337/api/projects")
      .then(response => {
        setProject(response.data.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
   
    <div className="flex min-h-screen items-center justify-center bg-white py-[180px] font-Poppins" >
      <div className="grid grid-cols-1 gap-5 md:grid-cols -2 lg:grid-cols-3">
      {project.map(({ id, attributes }, index) => (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl w-full " key={id}>
          <div className="h-[600px] w-[500px]">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={
              index === 0
                ? 'http://localhost:1337/uploads/Project_1_96265fa3b6.png'
                : index === 1
                ? 'http://localhost:1337/uploads/TMDB_api_trying_7f87b0e641.png'
                : 'http://localhost:1337/uploads/suit_91897e7991.jpeg'
            }
            alt={`Project Image ${index + 1}`}
          />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
          <div className="absolute bottom-4 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
            <h1 className="font-Poppins text-xl font-bold text-white ">{attributes.project_heading}</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {attributes.project_desc}
            </p>
            <a href="https://drive.google.com/file/d/1_9FF0KFr-hdd3oV1uwb134xOoKgdWCD7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </a>
          </div>
        </div>
        ))}
        </div>
      </div>
    
    </>
  );
};

export default Projects;

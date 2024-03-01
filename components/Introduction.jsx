"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../app/globals.css";

const Introduction = () => {
  const [error, setError] = useState(null);
  const [myResume, setMyResume] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:1337/api/my-resume")
      .then(response => {
        setMyResume(response.data.data.attributes);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!myResume) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div id="intro" className='grid md:grid-cols-4 md:grid-rows-2 gap-6 p-[50px] md:p-[170px]' >
        <div className='col-start-1 row-start-2  md:col-start-1 md:row-start-1'>
          <h1 className='font-bold text-4xl mb-4'>{myResume.myResume_heading}</h1>
          <span className='mb-2 text-2xl text-[#555]'>{myResume.myResume_desc}</span>
        </div>
        <div className='col-start-1 row-start-1 row-span-2 md:col-start-2 md:col-ends-2 md:row-start-1'>
          <img className='self-photo' src="http://localhost:1337/uploads/Introduction_634fad99e1.jpeg" alt="" />
        </div>
        <div className="col-start-1 row-start-3 md:col-start-3 mda:col-ends-3 md:row-start-1 bg-gray-200 rounded-2xl">
          <h1 className='text-xl font-bold mb-4 m-4'>{myResume.aboutMe_heading}</h1>
          <p className=' mx-4 text-[#555]'>{myResume.aboutMe_desc}</p>
          <br />
          <br />
          <br />
          <span className='border-b-2 border-black relative left-5 bottom-4 '>View More</span>
        </div>
        <div className='col-start-1 row-start-4 md:col-start-4 md:col-ends-4 md:row-start-1'>
          <h1 className='text-xl font-bold mb-4 m-4'>{myResume.whatiDo_heading}</h1>
          <p className='mx-4 text-[#555]'>{myResume.whatiDo_desc}</p>
          <br />
          <br />
          <br />
          <span className='border-b-2 border-black relative left-5 bottom-4'> View More</span>
        </div>
        <div className='col-start-1 row-start-5 md:col-start-3 md:col-ends-3 md:row-start-2'>
          <h1 className='text-xl font-bold mb-4 m-4'>{myResume.educationBG_heading}</h1>
          <p className='mx-4 text-[#555]'>{myResume.educationBG_desc}</p>
          
          <br />
          <br />
          <br />
          <span className='border-b-2 border-black relative left-5 bottom-4'> View More</span>
        </div>
        <div className='col-start-1 row-start-6 md:col-start-4 md:col-ends-4 md:row-start-2 bg-gray-400 rounded-2xl'>
          <h1 className='text-xl font-bold mb-4 m-4'>Contact Me</h1>
          <p className='mx-4 text-[#555]'><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRsppnThzlLxmnSlwQWmRTXPxrFpdgTSSNLZwRLsZSvGzhWNHfkxcqrHxLfFvHGFwqdMjlB">Reach me out : codewithsatria@gmail.com</a></p>
        <div className='flex gap-[4px] pl-[14px] pt-[80px]'>
          <a href="https://github.com/CodeWithSatria" >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
          </a>
          <a href="https://www.instagram.com/sstriaa_/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
          </a>
        </div>
          
        </div>
    </div>
    </>
  );
};

export default Introduction;


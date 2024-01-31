import '../app/globals.css';

const Navbar = () => {
  return (
    <div id="intro" className='grid md:grid-cols-4 md:grid-rows-2 gap-6 p-[198px]'>
        <div className='col-start-1 row-start-2  md:col-start-1 md:row-start-1'>
          <h1 className='font-bold text-4xl mb-4'>My Resume</h1>
          <span className='mb-2 text-2xl text-[#555]'>It's all about me</span>
        </div>
        <div className='col-start-1 row-start-1 row-span-2 md:col-start-2 md:col-ends-2 md:row-start-1'>
          <img className='self-photo' src="/introduction.jpeg" alt="" />
        </div>
        <div className="col-start-1 row-start-3 md:col-start-3 md:col-ends-3 md:row-start-1 bg-gray-200 rounded-2xl">
          <h1 className='text-xl font-bold mb-4 m-4'>About Me</h1>
          <p className=' mx-4 text-[#555]'>I'm a second grade student from SMK TI Bali Global , i am driven by a passion for a programming and a thirst for knowledge </p>
          <br />
          <span className='border-b-2 border-black relative left-5 bottom-4 '>View More</span>
        </div>
        <div className='col-start-1 row-start-4 md:col-start-4 md:col-ends-4 md:row-start-1'>
          <h1 className='text-xl font-bold mb-4 m-4'>What I Do</h1>
          <p className='mx-4 text-[#555]'>I am in a journey to refine my skills in crafting front-end designs and i'm poised to embrace a continuous learning journey.</p>
          <br />
          <span className='border-b-2 border-black relative left-5 bottom-4'> View More</span>
        </div>
        <div className='col-start-1 row-start-5 md:col-start-3 md:col-ends-3 md:row-start-2'>
          <h1 className='text-xl font-bold mb-4 m-4'>Educational Background</h1>
          <p className='mx-4 text-[#555]'>2011-2013 : TK Kesuma Sari</p>
          <p className='mx-4 text-[#555]'>2013-2019 : SD 2 Sesetan</p>
          <p className='mx-4 text-[#555]'>2019-2022 : SMP Ganesha Denpasar</p>
          <br />
          <br />
          <span className='border-b-2 border-black relative left-5 bottom-4'> View More</span>
        </div>
        <div className='col-start-1 row-start-6 md:col-start-4 md:col-ends-4 md:row-start-2 bg-gray-400 rounded-2xl'>
          <h1 className='text-xl font-bold mb-4 m-4'>Contact Me</h1>
          <p className='mx-4 text-[#555]'>Reach me out : codewithsatria@gmail.com</p>
          <br />
          <br />
          <br />
          <span className='border-b-2 border-black relative left-5 bottom-4 '> View More</span>
        </div>
    </div>
  );
};

export default Navbar;

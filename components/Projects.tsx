import "../app/globals.css";


interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  projectLink?: string;
}

const ProjectCard = ({ imageSrc, title, description, projectLink }: ProjectCardProps) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl">
      <div className="h-[600px] w-[500px]">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
      <div className="absolute bottom-4 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
        <h1 className="font-Poppins text-xl font-bold text-white ">{title}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        {projectLink? (
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
            </button>
          </a>
        ) : (
          <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
          See More
        </button>
        )}
        
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      imageSrc: 
        "/Project-1.png",
      title: "Creating Anime Website",
      description:
        "Tried to Create a clone version of Crunchyroll, i called it Crunchyflip",
        projectLink: "https://drive.google.com/file/d/1_9FF0KFr-hdd3oV1uwb134xOoKgdWCD7/view?usp=sharing"
    },
    {
      imageSrc:
        "/TMDB.png",
      title: "Website API TMDB",
      description: "Try to applying API to try a website TMDB (The Movie Database)",
      projectLink: "https://drive.google.com/drive/folders/1y7Upzuw6wLGZevgPM5LwK0I2QNFMh4Bg?usp=drive_link"
    },
    {
      imageSrc:
        "/suit.jpeg",
      title: "Created Rock Paper Scissors game",
      description: "I Created a Rock Paper Scissors game using cxxdroid (android c++ text editor) ",
      projectLink: "https://youtu.be/tv4x2KrG-gA?si=FsloBhA4vVzXnG2P"
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-white py-[180px] font-Poppins">
      <div className="grid grid-cols-1 gap-5 md:grid-cols -2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

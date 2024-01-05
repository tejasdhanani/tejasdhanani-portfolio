import ProjectCard from "./ProjectCard"

const projectsData = [
  {
    id: 1,
    title: "React Project 1",
    description: "Project 1 desc",
    image: "/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#"
  },
  {
    id: 2,
    title: "React Project 2",
    description: "Project 2 desc",
    image: "/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#"
  },
  {
    id: 3,
    title: "React Project 3",
    description: "Project 3 desc",
    image: "/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#"
  }
]


const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />)}
      </div>
    </>
  )
}
export default ProjectsSection
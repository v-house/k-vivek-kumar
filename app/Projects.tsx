import PCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="education" className="my-12">
      <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
        Projects
      </div>
      <div className="flex flex-wrap p-6 justify-evenly">
        <PCard
          type={"Personal Web-UI"}
          repo={"https://github.com/v-house/k-vivek-kumar.git"}
          title={"My Portfolio"}
          softwares={"Nextjs, TailwindCSS"}
          place={"Individual interest"}
          elink={"https://k-vivek-kumar.vercel.app/"}
          rated={"40"}
          achieved={"20"}
        />
        <PCard
          type={"Block Chain"}
          repo={"https://github.com/Sampath-17/blockchain.git"}
          title={"Miniature version of Blockchain"}
          softwares={"Python"}
          place={"6-Members Course Project"}
          elink={"https://github.com/Sampath-17/blockchain.git"}
          rated={"86"}
          achieved={"92"}
        />
        <PCard
          type={"Full-Stack Website"}
          repo={"https://github.com/v-house/collab.git"}
          title={"Freelancing clone, Collab@IITH"}
          softwares={"Nextjs, NodeJS, MongoDB, TailwindCSS"}
          place={"Individual Project"}
          elink={"https://collab-iith.vercel.app/"}
          rated={"80"}
          achieved={"100"}
        />
      </div>
    </section>
  );
};

export default Projects;

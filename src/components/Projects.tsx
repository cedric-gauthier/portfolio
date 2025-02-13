import { Lucide } from "./icons";
import { FaSailboat } from "react-icons/fa6";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const projects = [
  {
    title: "Nolark",
    description: "Site web html/css",
    icon: GiFullMotorcycleHelmet,
    url: "/nolark",
  },
  {
    title: "Navire",
    description: "Application c#",
    icon: FaSailboat,
    url: "/navire",
  },
  {
    title: "Projet 3",
    description: "Description du projet 3",
    icon: FaSailboat,
    url: "/projet-3",
  },
  {
    title: "Projet 4",
    description: "Description du projet 4",
    icon: FaSailboat,
    url: "/projet-4",
  },
  {
    title: "Projet 5",
    description: "Description du projet 5",
    icon: FaSailboat,
    url: "/projet-5",
  },
  {
    title: "Projet 6",
    description: "Description du projet 6",
    icon: FaSailboat,
    url: "/projet-6",
  },
];

export default () => {
  // Diviser les projets en deux listes : gauche et droite
  const leftProjects = projects.slice(0, 3);
  const rightProjects = projects.slice(3);

  return (
    <div className="max-w-3xl px-4">
      <h2 className="font-medium text-xl mb-3 underline underline-offset-4">Projets</h2>
      <ul className="grid grid-cols-2 gap-3 p-1">
        {/* Projets à gauche */}
        {leftProjects.map((project, index) => (
          <a href={project.url} key={index} className="group">
            <li className="flex items-center justify-between px-4 py-3 bg-accent-1 hover:bg-accent-2 shadow-lg rounded-3xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-7 focus-visible:ring-offset-accent-1">
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <project.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-0 group-hover:text-primary-9"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-0 text-sm group-hover:text-primary-9">{project.title}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-0 group-hover:text-primary-8 text-xs">
                    {project.description}
                  </div>
                </div>
              </div>

              <div className="group-hover:opacity-100 opacity-0 transition-opacity">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="text-neutral-0 group-hover:text-primary-9 group-focus-visible:text-primary-11"
                />
              </div>
            </li>
          </a>
        ))}
        {/* Projets à droite */}
        {rightProjects.map((project, index) => (
          <a href={project.url} key={index} className="group">
            <li className="flex items-center justify-between px-4 py-3 bg-accent-1 hover:bg-accent-2 shadow-lg rounded-3xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-7 focus-visible:ring-offset-accent-1">
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <project.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-0 group-hover:text-primary-9"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-0 text-sm group-hover:text-primary-9">{project.title}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-0 group-hover:text-primary-8 text-xs">
                    {project.description}
                  </div>
                </div>
              </div>

              <div className="group-hover:opacity-100 opacity-0 transition-opacity">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="text-neutral-0 group-hover:text-primary-9 group-focus-visible:text-primary-11"
                />
              </div>
            </li>
          </a>))}
        </ul>
    </div>
  )
}
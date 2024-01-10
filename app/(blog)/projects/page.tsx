import Link from "next/link";

const projects = [
  {
    title: "blog",
    description: "Just a simple blog, my humble little home on the internet.",
    repository: "https://github.com/cazcik/blog",
    link: "https://cazcik.me",
  },
  {
    title: "dnsd",
    description:
      "Simple and minimal tool for doing domain profiling and research.",
    repository: "https://github.com/cazcik/dnsd",
    link: "https://dnsd.cazcik.me",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="mb-6 text-xl font-semibold lowercase text-black md:mb-8 md:text-2xl dark:text-white">
          Projects.
        </h1>
        <p className="text-neutral-600 md:text-lg dark:text-neutral-400">
          I've built a few lightweight tools that I've found to be useful.
          Typically I build things that don't already exist, or if they do, I
          make a slightly more opinonated version.
        </p>
      </div>
      <div className="mt-10 flex flex-col space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="group flex items-center gap-1"
                >
                  <h2 className="group-hover:underlinemd:text-xl text-lg font-semibold lowercase text-black dark:text-white">
                    {project.title}
                  </h2>
                  <div className="hidden text-black group-hover:flex dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="h-5 w-5">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  href={project.repository}
                >
                  <svg
                    role="img"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

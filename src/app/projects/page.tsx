import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <Link
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 
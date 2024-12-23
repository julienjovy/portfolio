import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto">
        <section className="py-20">
          <h1 className="text-4xl font-bold mb-4">Julien Jovy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Développeur Full Stack • Laravel • Symfony • React • Next.js • Tailwind CSS
          </p>
        </section>

        {/* À propos */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">À propos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Développeur passionné, j'utilise des frameworks comme Laravel ou Symfony pour créer des 
            applications performantes et évolutives. Côté front-end, je m'appuie sur React et Tailwind CSS 
            pour concevoir des interfaces modernes et fluides. J'ai également un fort intérêt pour 
            la transmission des connaissances, en accompagnant des développeurs dans leur apprentissage.
          </p>
        </section>

        {/* Projets */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projet Sagittarius A* */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Sagittarius A*</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Système de gestion de scènes innovant basé sur des ScriptableObjects, 
                développé avec Unity pour une modularité et une organisation optimales.
              </p>
            </div>
            {/* Portfolio */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mon site personnel mettant en avant mes compétences, expériences, et projets, 
                conçu avec Next.js et Tailwind CSS.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://julienjovy.github.io/portfolio/" 
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site
                </a>
                <a 
                  href="https://github.com/julienjovy" 
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="flex gap-4">
            <a 
              href="mailto:julien@golpert.dev"
              className="text-blue-500 hover:underline"
            >
              <Image 
                src="/portfolio/email-256.png" 
                alt="Email" 
                width={36} 
                height={36} 
                className="invert grayscale" 
              />
            </a>
            <a 
              href="https://github.com/julienjovy"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                src="/portfolio/github-256.png" 
                alt="GitHub" 
                width={36} 
                height={36} 
                className="invert grayscale" 
              />
            </a>
            <a 
              href="https://linkedin.com/in/julienjovy"
              className="text-blue-500 hover:border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                src="/portfolio/linkedin-256.png" 
                alt="LinkedIn" 
                width={36} 
                height={36} 
                className="focus:border-white hover:border-white" 
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

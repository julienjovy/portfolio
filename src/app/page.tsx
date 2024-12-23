import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto">
        <section className="py-20">
          <h1 className="text-4xl font-bold mb-4">Julien Jovy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Développeur Full Stack • Laravel • React • Next.js • Tailwind CSS
          </p>
        </section>

        {/* À propos */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">À propos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Description incoming
          </p>
        </section>

        {/* Projets */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projet Card */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Nom du Projet</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Description courte du projet
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
                <a 
                  href="#" 
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
              <Image src="/email-256.png" alt="Email" width={36} height={36} className="invert grayscale" />
            </a>
            <a 
              href="https://github.com/julienjovy"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                src="/github-256.png" 
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
                <Image src="/linkedin-256.png" alt="LinkedIn" width={36} height={36} className="focus:border-white hover:border-white" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

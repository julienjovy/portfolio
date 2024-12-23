export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto">
        <section className="py-20">
          <h1 className="text-4xl font-bold mb-4">Votre Nom</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Développeur Full Stack • Designer • Créateur
          </p>
        </section>

        {/* À propos */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">À propos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Décrivez-vous ici. Parlez de votre passion pour le développement et de votre parcours.
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
              href="mailto:votre@email.com"
              className="text-blue-500 hover:underline"
            >
              Email
            </a>
            <a 
              href="https://github.com/votre-username"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/votre-profil"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

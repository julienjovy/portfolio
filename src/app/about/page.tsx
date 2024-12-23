export default function About() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">À Propos</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img 
              src="/images/profile.jpg" 
              alt="Photo de profil"
              className="rounded-lg w-full"
            />
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Qui suis-je ?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Votre présentation personnelle ici...
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Compétences</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Parcours</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Entreprise Actuelle</h3>
                  <p className="text-gray-600 dark:text-gray-300">Poste • 2022 - Présent</p>
                </div>
                <div>
                  <h3 className="font-bold">Entreprise Précédente</h3>
                  <p className="text-gray-600 dark:text-gray-300">Poste • 2020 - 2022</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

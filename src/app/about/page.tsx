import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">À Propos</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image
              src="/images/profile.jpg"
              alt="Photo de profil"
              width={400}
              height={400}
              className="rounded-lg w-full"
            />
          </div>

          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Qui suis-je ?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Développeur Full Stack passionné par la création d&apos;applications web performantes et élégantes.
                J&apos;ai une solide expertise en **Laravel**, **PHP**, **React**, et **Node.js**, et je m&apos;efforce de
                partager mes connaissances à travers l&apos;enseignement et la création de projets open-source.
                Toujours curieux, j&apos;aime relever de nouveaux défis techniques et collaborer avec des équipes passionnées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Compétences</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Image
                        src="/portfolio/icons/react-icon.svg"
                        alt="React"
                        width={24}
                        height={24}
                      />
                      <span className="text-gray-600 dark:text-gray-300">React</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/portfolio/icons/typescript-icon.svg"
                        alt="TypeScript"
                        width={24}
                        height={24}
                      />
                      <span className="text-gray-600 dark:text-gray-300">TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/portfolio/icons/tailwind-icon.svg"
                        alt="Tailwind CSS"
                        width={24}
                        height={24}
                      />
                      <span className="text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Image
                        src="/portfolio/icons/nodejs-icon.svg"
                        alt="Node.js"
                        width={24}
                        height={24}
                      />
                      <span className="text-gray-600 dark:text-gray-300">Node.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/portfolio/icons/laravel-icon.svg"
                        alt="Laravel"
                        width={24}
                        height={24}
                      />
                      <span className="text-gray-600 dark:text-gray-300">Laravel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image
                        src="/portfolio/icons/php-icon.svg"
                        alt="PHP"
                        width={24}
                        height={24}
                      />
                      <span className="text-gray-600 dark:text-gray-300">PHP</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* <section>
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
            </section> */}
          </div>
        </div>
      </main>
    </div>
  );
}

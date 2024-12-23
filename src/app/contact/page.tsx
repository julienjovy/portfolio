export default function Contact() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Parlons de votre projet</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Vous avez un projet en tête ? Je serais ravi d&apos;en discuter avec vous.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Email</h3>
                <a href="mailto:votre@email.com" className="text-blue-500 hover:underline">
                  votre@email.com
                </a>
              </div>
              
              <div>
                <h3 className="font-bold">Réseaux sociaux</h3>
                <div className="flex gap-4 mt-2">
                  <a 
                    href="https://linkedin.com/in/votre-profil"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
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
                    href="https://twitter.com/votre-username"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold mb-2">Nom</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Envoyer
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 
import Link from "next/link";

const articles = [
  {
    slug: 'article-1',
    title: 'Premier Article',
    date: '2024-01-15',
    externalUrl: 'https://example.com/article-1',
  },
  {
    slug: 'article-2',
    title: 'Deuxième Article',
    date: '2024-01-16',
    externalUrl: 'https://example.com/article-2',
  }
];

export default function BlogPage() {
  return (
    <div className="p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        
        <div className="space-y-6">
          {articles.map((article) => (
            <article key={article.slug}>
              <Link 
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-gray-50 p-4 rounded-lg"
              >
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <time className="text-gray-600">{article.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 
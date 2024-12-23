'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Votre Nom
          </Link>
          
          <div className="flex gap-6">
            <Link href="/" className={isActive('/')}>
              Accueil
            </Link>
            <Link href="/about" className={isActive('/about')}>
              À propos
            </Link>
            <Link href="/projects" className={isActive('/projects')}>
              Projets
            </Link>
            <Link href="/blog" className={isActive('/blog')}>
              Blog
            </Link>
            <Link href="/contact" className={isActive('/contact')}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
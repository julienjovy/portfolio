import Link from 'next/link';
import React from 'react';

interface ArticleProps {
    title: string;
    date: string;
    externalUrl: string;
    slug: string;
}

export const Article: React.FC<ArticleProps> = ({ title, date, externalUrl, slug }) => {
    return (
        <article key={slug}>
            <Link
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-gray-50 p-4 rounded-lg"
            >
                <h2 className="text-xl font-semibold">{title}</h2>
                <time className="text-gray-600">{date}</time>
            </Link>
        </article>
    );
};
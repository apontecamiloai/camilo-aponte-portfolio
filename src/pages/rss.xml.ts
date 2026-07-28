import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  );

  return rss({
    title: 'Camilo Aponte | AI Automation Engineer',
    description:
      'Technical writing on production AI systems, agentic AI, conversational AI, and knowledge engineering.',
    site: context.site ?? 'https://camiloaponte.dev',
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.summary,
      pubDate: article.data.published,
      link: `/writing/${article.data.slug}/`,
    })),
  });
}

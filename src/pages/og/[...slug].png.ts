import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '../../lib/og';
import { site } from '../../data/site';

export const getStaticPaths: GetStaticPaths = async () => {
  const works = await getCollection('work');

  const pages = [
    {
      params: { slug: 'home' },
      props: {
        title: site.name,
        description: site.description,
      },
    },
    ...works.map((w) => ({
      params: { slug: `work/${w.id}` },
      props: {
        title: w.data.title,
        description: w.data.summary,
      },
    })),
  ];

  return pages;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as {
    title: string;
    description: string;
  };
  const png = await generateOgImage(title, description);

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};

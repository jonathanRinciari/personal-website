import { site } from '../data/site';

export interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function buildMeta(props: SeoProps) {
  return {
    title: props.title ?? site.title,
    description: props.description ?? site.description,
    canonicalUrl: props.canonicalUrl ?? site.url,
    ogImage: props.ogImage ?? `${site.url}/og/home.png`,
  };
}

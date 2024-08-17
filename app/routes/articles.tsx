import { Link, MetaFunction, json, useLoaderData } from '@remix-run/react';
import { articleQuery } from '~/queries/article';
import { safelyFormatDate } from '~/utils/safelyFormatDate';
import BlogConfig from '../../blog.config';
import * as styles from './articles.css';
import { generateMeta } from '~/utils/meta/generate-meta';
import { pathJoin } from '~/utils/path';

export const meta: MetaFunction = () => {
  return generateMeta({
    title: ['Articles', BlogConfig.seo.title],
    description: BlogConfig.seo.description,
    image: pathJoin(BlogConfig.site, BlogConfig.image.main),
    url: pathJoin(BlogConfig.site, 'articles'),
  });
};

export async function loader() {
  const articles = json(await articleQuery.getArticles());

  return articles
}

export default function ArticlesPage() {
  const articles = useLoaderData<typeof loader>();

  return (
    <ul className={styles.root}>
      {articles.map(({ title, category, lastUpdatedAt }, index) => {
        return (
          <li key={index} className={styles.item}>
            <Link to={`/articles/${category}/${title}`} className={styles.link} prefetch="intent">
              <span>{title}</span>
            </Link>
            <span className={styles.dateText}>{safelyFormatDate(lastUpdatedAt)}</span>
          </li>
        )})}
    </ul>

  );
}

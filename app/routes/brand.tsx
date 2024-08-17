import { MetaFunction } from '@remix-run/node';
import { TextLink } from '~/components/text-link/TextLink';
import { generateMeta } from '~/utils/meta/generate-meta';
import { pathJoin } from '~/utils/path';
import BlogConfig from '../../blog.config';
import * as styles from './brand.css'

export const meta: MetaFunction = () => {
  return generateMeta({
    title: ['Brand', BlogConfig.seo.title],
    description: BlogConfig.seo.description,
    image: pathJoin(BlogConfig.site, BlogConfig.image.main),
    url: pathJoin(BlogConfig.site, 'brand'),
    logo: pathJoin(BlogConfig.site, 'logo.jpeg'),
  });
};

export default function BrandPage() {
  return (
    <section>
      <section>
        <h2>Frontend Engineer, Jbee</h2>
        <ul className={styles.list}>
          <li>
            resume: <TextLink href={BlogConfig.contacts.resume}>ko</TextLink>
          </li>
        </ul>
      </section>
      <section>
        <h3>Scuba diver</h3>
        <ul className={styles.list}>
          <li>Instagram: <TextLink href={BlogConfig.contacts.instagram} /></li>
          <li>Youtube: <TextLink href={BlogConfig.contacts.youtube} /></li>
        </ul>
      </section>
    </section>
    
  );
}
  

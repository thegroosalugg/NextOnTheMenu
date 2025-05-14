import Link from 'next/link';
import styles from './page.module.css';
import Slideshow from '@/components/Slideshow';

const Section = ({
    children,
  paragraphs,
}: {
    children: React.ReactNode;
  paragraphs: string[];
}) => (
  <section className={styles['section']}>
    <h2>{children}</h2>
    {paragraphs.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </section>
);

export default function Home() {
  return (
    <div className={styles['home-page']}>
      <header>
        <Slideshow />
        <div className={styles['banner']}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste & share food from all over the world.</p>
          <div className={styles['links']}>
            <Link href='/community'>Join the Community</Link>
            <Link href='/meals'>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <Section
          paragraphs={[
            "NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.",

            'NextLevel Food is a place to discover new dishes, and to connect with other food lovers.',
          ]}
        >
          How it works
        </Section>
        <Section
          paragraphs={[
            "NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.",

            'NextLevel Food is a place to discover new dishes, and to connect with other food lovers.',
          ]}
        >
          Why NextLevel Food?
        </Section>
      </main>
    </div>
  );
}

import styles from './page.module.css';

const Paragraph = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <section className={styles['paragraph']}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default function Home() {
  return (
    <div className={styles['home']}>
      <Paragraph title='Request Memoization'>
        NextJS stpres data requests wih the same configuration. This avoids unnecessary
        duplicate data fetches. Cache only persists during request duration.
      </Paragraph>
      <Paragraph title='Data Cache'>
        NextJS stores & reuses fetched data until its revalidated. This Avoids unnecessary
        requests to the data source & speeds up the application. The cache persists until
        it&apos;s revaldated (manually or after a set time)
      </Paragraph>
      <Paragraph title='Full Route Cache'>
        NextJS stores the rendered HTML & RSC at build time. This avoids unnecessary HTML
        render cycles & data fetches. The cache persists until the related data cache is
        revalidated.
      </Paragraph>
      <Paragraph title='Router Cache'>
        NextJS stores the RSC payload in memory in the browser. This ensures extremely fast
        page transitions since no server request is needed.
      </Paragraph>
    </div>
  );
}

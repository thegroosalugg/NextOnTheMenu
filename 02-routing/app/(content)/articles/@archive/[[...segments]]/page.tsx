import styles from './page.module.css';
import { notFound } from 'next/navigation';
import News from '@/models/News';
import List from '@/components/list/List';
import NewsItem from '@/components/list/NewsItem';
import NavLink from '@/components/header/NavLink';

const months = [
  'january', 'february', 'march',
  'april', 'may', 'june',
  'july', 'august', 'september',
  'october', 'november', 'december',
];

// [[...segment]] routes catch all urls on this route and return an array of URL segments
export default async function ArticlesArchiveYear({
  params,
}: {
  params: Promise<{ segments: string[] }>;
}) {
  let content = <p>Select an archive</p>;

  const { segments } = await params;

  if (segments) {
    const [year, month] = segments;
    let news = await News.getByYear(year);
    const newsMonths = News.getMonths(news);
    news = month ? News.filterByMonth(news, month) : news;
    if (news.length < 1) notFound();

    content = (
      <>
        <nav>
          {newsMonths.map((month) => (
            <NavLink key={month} href={`/articles/${year}/${month}`}>
              {months[month].slice(0, 3)}
            </NavLink>
          ))}
        </nav>
        <h2>
          Articles from <span className='highlight'>{months[+month] ?? year}</span>
        </h2>
        <List<News> row keyFn={({ id }) => id} items={news}>
          {(news) => <NewsItem {...{ news }} />}
        </List>
      </>
    );
  }

  return <div className={styles['articles-archive-year']}>{content}</div>;
}

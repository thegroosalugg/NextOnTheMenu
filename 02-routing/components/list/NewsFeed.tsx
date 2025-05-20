import News from '@/models/News';
import List from '@/components/list/List';
import NewsItem from '@/components/list/NewsItem';

interface NewsFeed {
   row?: boolean;
  query: 'getAll' | 'getLatest';
}

export default async function NewsFeed({ query, row }: NewsFeed) {
  const news = await News[query]();

  return (
    <List<News> row={row} keyFn={({ id }) => id} items={news}>
      {(news) => <NewsItem {...{ news }} />}
    </List>
  );
}

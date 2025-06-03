import type Icon from './icon';
import styles from './Svg.module.css';
import { lazy } from 'react';

export default function Svg({ icon, size = 36 }: { icon: Icon; size?: number }) {
  const Icon = lazy(() => import(`./lib/${icon}.tsx`));

  return (
    <svg
      className={styles['svg']}
          width={size}
         height={size}
        viewBox='0 0 24 24'
           fill='none'
          xmlns='http://www.w3.org/2000/svg'
    >
      <Icon />
    </svg>
  );
}

// ### LazyLoading with client hooks
// const [Icon, setIcon] = useState<ComponentType | null>(null);

// useEffect(() => {
//   import(`./lib/${icon}.tsx`)
//     .then((mod) => setIcon(() => mod.default))
//     .catch(() => setIcon(null));
// }, [icon]);

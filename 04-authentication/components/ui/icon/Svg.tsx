'use client';
import Icon from './icon.model';
import styles from './Svg.module.css';
import { getCachedIcon } from './icon.cache';

interface SvgProps {
     icon: keyof typeof Icon;
    size?: number;
  invert?: boolean;
}

export default function Svg({ icon, size = 36, invert }: SvgProps) {
  const width = Icon[icon] ?? 24;
  const IconFc = getCachedIcon(icon);

  let classes = styles['svg'];
  if (invert) classes += ` ${styles['invert']}`;

  return (
    <svg
      className={classes}
         height={size}
        viewBox={`0 0 ${width} 24`}
           fill='none'
          xmlns='http://www.w3.org/2000/svg'
    >
      <IconFc />
    </svg>
  );
}

// ### Lazy React (Has quirks with SSR)
// const IconFc = lazy(() => import(`./lib/${icon}.tsx`));

// ### next/dynamic with useMemo to memoize state re-renders
// const IconFc = useMemo( // memo prevent useState re-renders
//   () => dynamic(() => import(`./lib/${icon}.tsx`), { ssr: false }),
//   [icon]
// );

// ### LazyLoading with useStateEffect (Slow)
// const [IconFc, setIconFc] = useState<ComponentType | null>(null);

// useEffect(() => {
//   import(`./lib/${icon}.tsx`)
//     .then((mod) => setIconFc(() => mod.default))
//     .catch(() => setIconFc(null));
// }, [icon]);

import Icon from './icon';
import styles from './Svg.module.css';
import { lazy } from 'react';

interface SvgProps {
    icon: keyof typeof Icon;
   size?: number;
  light?: boolean;
}

export default function Svg({ icon, size = 36, light }: SvgProps) {
  const  width = Icon[icon] ?? 24;
  const IconFc = lazy(() => import(`./lib/${icon}.tsx`));
  let  classes = styles['svg'];
  if (light) classes += ` ${styles['light']}`;

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

// ### LazyLoading with client hooks
// const [Icon, setIcon] = useState<ComponentType | null>(null);

// useEffect(() => {
//   import(`./lib/${icon}.tsx`)
//     .then((mod) => setIcon(() => mod.default))
//     .catch(() => setIcon(null));
// }, [icon]);

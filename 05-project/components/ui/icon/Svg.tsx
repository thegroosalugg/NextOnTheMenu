'use client';
import Icon from './icon.model';
import { getCachedIcon } from './icon.cache';

interface SvgProps {
     icon: keyof typeof Icon;
    size?: number;
  invert?: boolean;
}

export default function Svg({ icon, size = 36, invert }: SvgProps) {
  const width = Icon[icon] ?? 24;
  const IconFc = getCachedIcon(icon);

  // tailWind keeps inverting all blacks to white in dark mode.
  // have to use hacky invert mode and hard code inverted colors in dark mode to work
  let classes = `
    transition-all
    duration-600

    fill-sky-600
    stroke-bg
    hover:fill-bg
    hover:stroke-sky-600

    dark:fill-orange-500
    dark:stroke-neutral-300
    dark:hover:fill-neutral-300
    dark:hover:stroke-orange-500
    dark:invert
  `;

  if (invert) classes += ` `;

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

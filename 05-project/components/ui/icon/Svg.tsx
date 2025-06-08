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

  // all TW colors are global vars - bg | accent | light (when SVG on accented backgrounds)
  let classes = `
    transition-all
    duration-600

    fill-accent
    stroke-bg
    hover:fill-bg
    hover:stroke-accent
  `;

  if (invert) classes += ` stroke-light hover:fill-light`;

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

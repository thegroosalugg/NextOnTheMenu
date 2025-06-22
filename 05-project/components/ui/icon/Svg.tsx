'use client';
import Icon, { IconType } from './icon.model';
import { getCachedIcon } from './icon.cache';

interface SvgProps {
    icon: IconType;
   size?: number;
  light?: boolean;
}

export default function Svg({ icon, size = 16, light }: SvgProps) {
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

  if (light) classes += ` stroke-light hover:fill-light`;

  return (
    <svg
      className={classes}
         height={size}
        viewBox={`0 0 ${width} 24`}
           fill='none'
          xmlns='http://www.w3.org/2000/svg'
    >
      <title>{icon}</title>
      <IconFc />
    </svg>
  );
}

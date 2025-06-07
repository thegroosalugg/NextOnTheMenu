import { ComponentType } from 'react';
import dynamic from 'next/dynamic';

const cachedIcons = new Map<string, ComponentType>();

export function getCachedIcon(icon: string) {
  if (!cachedIcons.has(icon)) {
    const IconFc = dynamic(() => import(`./lib/${icon}.tsx`), { ssr: false });
    cachedIcons.set(icon, IconFc);
  }
  return cachedIcons.get(icon)!;
}

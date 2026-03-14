import { useState, useEffect } from 'react';

export function useThemeColors() {
  const [colors, setColors] = useState({
    text: '#94a3b8',
    textBright: '#f8fafc',
    grid: 'rgba(255,255,255,0.06)',
    cardAlt: '#1a2236',
    bg: '#0a0e1a',
    isDark: true,
  });

  useEffect(() => {
    const update = () => {
      const style = getComputedStyle(document.documentElement);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      setColors({
        text: style.getPropertyValue('--text-dim').trim() || '#94a3b8',
        textBright: style.getPropertyValue('--text-bright').trim() || '#f8fafc',
        grid: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)',
        cardAlt: style.getPropertyValue('--card-alt').trim() || '#1a2236',
        bg: style.getPropertyValue('--bg').trim() || '#0a0e1a',
        isDark,
      });
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return colors;
}

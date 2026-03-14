import { useRef, useState, useEffect, type ReactNode } from 'react';

interface ChartWrapperProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function ChartWrapper({ children, title, description }: ChartWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        marginBottom: '60px',
      }}
    >
      <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-bright)' }}>{title}</h3>
      {description && <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '24px' }}>{description}</p>}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '32px', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

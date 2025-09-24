import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  distance = 50,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const style: React.CSSProperties = {
    transform: getTransform(),
    opacity: direction === 'fade' ? (isVisible ? 1 : 0) : (isVisible ? 1 : 0),
    transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    willChange: 'transform, opacity',
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

interface StaggeredRevealProps {
  children: React.ReactNode[];
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  itemClassName?: string;
  threshold?: number;
  rootMargin?: string;
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  direction = 'up',
  staggerDelay = 150,
  duration = 800,
  distance = 50,
  className = '',
  itemClassName = '',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const getTransform = (index: number) => {
    const itemVisible = isVisible;
    if (itemVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => {
        const style: React.CSSProperties = {
          transform: getTransform(index),
          opacity: isVisible ? 1 : 0,
          transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}ms`,
          willChange: 'transform, opacity',
        };

        return (
          <div key={index} className={itemClassName} style={style}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

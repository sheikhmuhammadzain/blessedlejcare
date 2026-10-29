import React, { useEffect } from 'react';

// Performance optimization: Throttle scroll events
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Debounce function for resize events
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

interface ScrollOptimizerProps {
  children: React.ReactNode;
}

export const ScrollOptimizer: React.FC<ScrollOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    // Optimize scroll performance
    const handleScroll = throttle(() => {
      // Update CSS custom property for scroll position (can be used for parallax effects)
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      document.documentElement.style.setProperty('--scroll-y', `${rate}px`);
    }, 16); // ~60fps

    // Handle resize events
    const handleResize = debounce(() => {
      // Force recalculation of intersection observers on resize
      window.dispatchEvent(new Event('scroll'));
    }, 250);

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};

// Hook for getting scroll position
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.pageYOffset);
    }, 16);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// Component for smooth scroll to element
interface ScrollToProps {
  children: React.ReactNode;
  target: string;
  offset?: number;
  className?: string;
}

export const ScrollTo: React.FC<ScrollToProps> = ({ 
  children, 
  target, 
  offset = 0, 
  className = '' 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

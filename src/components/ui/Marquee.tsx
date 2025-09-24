import React from "react";
import clsx from "clsx";

export type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  durationMs?: number; // total duration for one loop
  pauseOnHover?: boolean;
  gradient?: boolean;
  gradientColor?: string; // tailwind color utility e.g. 'background'
};

/**
 * Accessible, performant, CSS-driven marquee.
 * - Duplicates the content track to create a seamless loop
 * - Respects prefers-reduced-motion
 * - Optional pause on hover
 * - Optional gradient fade edges
 */
export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className,
  trackClassName,
  durationMs = 30000,
  pauseOnHover = true,
  gradient = true,
  gradientColor = "background",
}) => {
  const style = {
    // Pass CSS variable for speed control
    // Using ms avoids floating rounding on some browsers
    ["--marquee-duration" as any]: `${durationMs}ms`,
  } as React.CSSProperties;

  return (
    <div
      className={clsx(
        "marquee relative w-full overflow-hidden",
        gradient && "marquee-fade",
        className
      )}
      style={style}
      aria-label="Site announcements"
      role="region"
    >
      {/* gradient masks via CSS; color through custom property */}
      <div className={clsx(pauseOnHover && "[&:hover_.marquee-track]:paused")}> 
        <div className={clsx("marquee-track", trackClassName)}>
          {children}
          {children}
        </div>
      </div>
      {/* Set the gradient color using CSS var */}
      <style>
        {`:root { --marquee-fade-color: var(--${gradientColor}); }`}
      </style>
    </div>
  );
};

export default Marquee;

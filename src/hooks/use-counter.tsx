import { useEffect, useState, useRef } from "react";

interface UseCounterProps {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
  trigger?: boolean;
}

export const useCounter = ({ end, duration = 2000, start = 0, suffix = "", trigger = false }: UseCounterProps) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger && !hasAnimated) {
      setHasAnimated(true);
      
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(start + (end - start) * easeOutQuart);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [trigger, hasAnimated, end, start, duration]);

  return { count: `${count}${suffix}`, ref };
};


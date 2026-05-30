import React, { useRef, useEffect, useState, useCallback } from 'react';

const DIRECTION_TRANSFORMS = {
  up: { hidden: 'translateY(40px)', visible: 'translateY(0)' },
  down: { hidden: 'translateY(-40px)', visible: 'translateY(0)' },
  left: { hidden: 'translateX(40px)', visible: 'translateX(0)' },
  right: { hidden: 'translateX(-40px)', visible: 'translateX(0)' },
  scale: { hidden: 'scale(0.95)', visible: 'scale(1)' },
};

const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [handleIntersect]);

  const transforms = DIRECTION_TRANSFORMS[direction] || DIRECTION_TRANSFORMS.up;
  const currentTransform = isVisible ? transforms.visible : transforms.hidden;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: currentTransform,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleIntersect = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 });
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [handleIntersect]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default AnimatedSection;

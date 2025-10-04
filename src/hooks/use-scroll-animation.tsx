import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { elementRef, isVisible };
};

// Animation variants for different effects
export const animationClasses = {
  fadeIn: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInUp: {
    initial: 'opacity-0 translate-y-12',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-800 ease-out'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  slideUp: {
    initial: 'opacity-0 translate-y-16',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-900 ease-out'
  }
};

// Animated component wrapper
interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: keyof typeof animationClasses;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
  as: Component = 'div'
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay });
  const animationClass = animationClasses[animation];

  return (
    <Component
      ref={elementRef as React.Ref<any>}
      className={`
        ${animationClass.initial} 
        ${isVisible ? animationClass.animate : ''} 
        ${animationClass.transition}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};
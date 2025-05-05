import { useEffect, useState } from 'react';

interface UseScrollSnapOptions {
  scrollDelay?: number;
}

const useScrollSnap = (sectionIds: string[] = [], options: UseScrollSnapOptions = {}) => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const { scrollDelay = 1000 } = options;

  useEffect(() => {
    const sections = sectionIds.map(id => document.getElementById(id));
    let lastScrollTime = 0;
    let ticking = false;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    // Create intersection observer to track which section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionIds.findIndex(id => id === entry.target.id);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Handle wheel events for smooth magnetic scrolling
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      
      if (!isScrolling && now - lastScrollTime > scrollDelay) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.min(Math.max(activeSection + direction, 0), sections.length - 1);
        
        if (nextIndex !== activeSection) {
          e.preventDefault();
          setIsScrolling(true);
          
          const targetSection = sections[nextIndex];
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(nextIndex);
            
            setTimeout(() => {
              setIsScrolling(false);
              lastScrollTime = Date.now();
            }, scrollDelay);
          }
        }
      }
      
      // Use requestAnimationFrame to limit the frequency of event handling
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      
      if (!isScrolling && now - lastScrollTime > scrollDelay) {
        let direction = 0;
        
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          direction = 1;
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          direction = -1;
        } else {
          return;
        }
        
        const nextIndex = Math.min(Math.max(activeSection + direction, 0), sections.length - 1);
        
        if (nextIndex !== activeSection) {
          e.preventDefault();
          setIsScrolling(true);
          
          const targetSection = sections[nextIndex];
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(nextIndex);
            
            setTimeout(() => {
              setIsScrolling(false);
              lastScrollTime = Date.now();
            }, scrollDelay);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds, activeSection, isScrolling, scrollDelay]);

  // Function to scroll to a specific section
  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sectionIds.length && !isScrolling) {
      const section = document.getElementById(sectionIds[index]);
      if (section) {
        setIsScrolling(true);
        
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setActiveSection(index);
        
        // Add a delay before allowing another scroll
        setTimeout(() => {
          setIsScrolling(false);
        }, scrollDelay);
      }
    }
  };

  return {
    activeSection,
    scrollToSection,
  };
};

export default useScrollSnap; 
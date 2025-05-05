import { useEffect, useState } from 'react';

interface UseScrollSnapOptions {
  scrollDelay?: number;
  mobileScrollDelay?: number;
}

const useScrollSnap = (sectionIds: string[] = [], options: UseScrollSnapOptions = {}) => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { scrollDelay = 1000, mobileScrollDelay = 600 } = options;

  // Detect mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds.map(id => document.getElementById(id));
    let lastScrollTime = 0;
    let ticking = false;
    const currentScrollDelay = isMobile ? mobileScrollDelay : scrollDelay;

    const observerOptions = {
      root: null,
      rootMargin: isMobile ? '-10% 0px -10% 0px' : '0px',
      threshold: isMobile ? 0.25 : 0.5,
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
      
      // On mobile, make scrolling less restrictive
      if (isMobile && Math.abs(e.deltaY) < 20) {
        return;
      }
      
      if (!isScrolling && now - lastScrollTime > currentScrollDelay) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.min(Math.max(activeSection + direction, 0), sections.length - 1);
        
        if (nextIndex !== activeSection) {
          e.preventDefault();
          setIsScrolling(true);
          
          const targetSection = sections[nextIndex];
          if (targetSection) {
            targetSection.scrollIntoView({ 
              behavior: 'smooth',
              block: isMobile ? 'start' : 'start'
            });
            setActiveSection(nextIndex);
            
            setTimeout(() => {
              setIsScrolling(false);
              lastScrollTime = Date.now();
            }, currentScrollDelay);
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
      
      if (!isScrolling && now - lastScrollTime > currentScrollDelay) {
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
            targetSection.scrollIntoView({ 
              behavior: 'smooth',
              block: isMobile ? 'start' : 'start'
            });
            setActiveSection(nextIndex);
            
            setTimeout(() => {
              setIsScrolling(false);
              lastScrollTime = Date.now();
            }, currentScrollDelay);
          }
        }
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const now = Date.now();
      
      if (!isScrolling && now - lastScrollTime > currentScrollDelay) {
        const touchDiff = touchStartY - touchEndY;
        
        // Only trigger if the swipe is significant
        if (Math.abs(touchDiff) > 50) {
          const direction = touchDiff > 0 ? 1 : -1;
          const nextIndex = Math.min(Math.max(activeSection + direction, 0), sections.length - 1);
          
          if (nextIndex !== activeSection) {
            setIsScrolling(true);
            
            const targetSection = sections[nextIndex];
            if (targetSection) {
              targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
              setActiveSection(nextIndex);
              
              setTimeout(() => {
                setIsScrolling(false);
                lastScrollTime = Date.now();
              }, currentScrollDelay);
            }
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    // Add touch event listeners for mobile
    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      }
      
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds, activeSection, isScrolling, scrollDelay, mobileScrollDelay, isMobile]);

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
        }, isMobile ? mobileScrollDelay : scrollDelay);
      }
    }
  };

  return {
    activeSection,
    scrollToSection,
    isMobile
  };
};

export default useScrollSnap; 
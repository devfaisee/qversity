'use client';
// hooks/useScrollToTop.js
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;

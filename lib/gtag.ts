// lib/gtag.ts

declare global {
    interface Window {
      gtag: (...args: unknown[]) => void;
    }
  }
  
  export const GA_MEASUREMENT_ID = 'G-P96HYHF5F5';
  
  export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  };
  
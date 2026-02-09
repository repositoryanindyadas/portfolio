import { useCallback } from 'react';
import { useToast } from '../context/ToastContext';

export const useCardClick = () => {
  const { showToast } = useToast();

  const handleCardClick = useCallback((link?: string, message: string = "Redirecting feature to be added") => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      showToast(message);
    }
  }, [showToast]);

  return handleCardClick;
};

export const interactiveClass = "cursor-pointer transition-transform active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary-500/50";

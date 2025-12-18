/**
 * useAutoRotate Hook
 *
 * Automatically rotates through items at a specified interval.
 * Used for tabbed carousels, feature showcases, etc.
 */

import { useState, useEffect, useCallback } from "react";
import { AUTO_ROTATE_INTERVAL } from "@/lib/constants";

interface UseAutoRotateOptions {
  /** Number of items to rotate through */
  length: number;
  /** Interval in milliseconds (default: 5000) */
  interval?: number;
  /** Whether to auto-rotate (default: true) */
  enabled?: boolean;
}

interface UseAutoRotateReturn {
  /** Current active index */
  activeIndex: number;
  /** Set active index manually (resets the timer) */
  setActiveIndex: (index: number) => void;
  /** Pause auto-rotation */
  pause: () => void;
  /** Resume auto-rotation */
  resume: () => void;
  /** Whether currently paused */
  isPaused: boolean;
}

export function useAutoRotate({
  length,
  interval = AUTO_ROTATE_INTERVAL,
  enabled = true,
}: UseAutoRotateOptions): UseAutoRotateReturn {
  const [activeIndex, setActiveIndexState] = useState(0);
  const [isPaused, setIsPaused] = useState(!enabled);

  const setActiveIndex = useCallback((index: number) => {
    setActiveIndexState(index);
  }, []);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    if (isPaused || length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndexState((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, length, interval]);

  return {
    activeIndex,
    setActiveIndex,
    pause,
    resume,
    isPaused,
  };
}


/**
 * useIsMobile Hook
 *
 * Detects if the viewport is below a specified breakpoint.
 * Used for responsive component behavior.
 * 
 * Returns `null` during SSR/initial render to avoid hydration mismatch,
 * then returns the actual boolean value after mount.
 */

import { useState, useEffect } from "react";

/**
 * Hook to detect mobile/tablet viewport
 * @param breakpoint - Width threshold in pixels (default: 1024 for lg breakpoint)
 * @returns boolean indicating if viewport is below breakpoint, or null during SSR
 */
export function useIsMobile(breakpoint: number = 1024): boolean | null {
  // Start with null to indicate "not yet determined" (SSR-safe)
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [breakpoint]);

  return isMobile;
}


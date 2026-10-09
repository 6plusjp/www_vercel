import { useCallback, useEffect, useRef, useState } from "react";

/**
 * useThrottle
 * Throttles a function with a timeout and ensures
 * that the callback function runs at most once in that duration
 *
 * @param fn The callback to throttle
 * @param timeout Throttle timeout (default:300)
 */
function useThrottle(
  callbackFn: Function,
  timeout: number = 300,
): [(...args: unknown[]) => unknown, boolean] {
  const [ready, setReady] = useState(true);
  const timerRef = useRef<number | undefined>(undefined);

  if (!callbackFn || typeof callbackFn !== "function") {
    throw new Error(
      "As a first argument, you need to pass a function to useThrottle hook.",
    );
  }

  const throttledFunction = useCallback(
    (...args: unknown[]) => {
      if (!ready) {
        return;
      }

      setReady(false);
      callbackFn(...args);
    },
    [ready, callbackFn],
  );

  useEffect(() => {
    if (!ready) {
      timerRef.current = window.setTimeout(() => {
        setReady(true);
      }, timeout);

      return () => window.clearTimeout(timerRef.current);
    }
  }, [ready, timeout]);

  return [throttledFunction, ready];
}

export { useThrottle };

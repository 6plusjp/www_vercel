import type { RefObject } from "react";
import { useEffect, useState } from "react";

/**
 * The `useIntersectionObserver` function is a custom React hook that detects visibility of a component on the viewport using the natively present in the browser.
 * It can be very useful to lazy-loading of images, implementing "infinite scrolling" or starting animations for example.
 * @returns The full IntersectionObserver's entry object.
 * @example
 * import { useRef } from 'react'
 *
 * const Section = (props: { title: string }) => {
 *   const ref = useRef<HTMLDivElement | null>(null)
 *   const entry = useIntersectionObserver(ref)
 *   const isVisible = !!entry?.isIntersecting
 *   console.log(`Render Section ${props.title}`, { isVisible })
 *   return (
 *     <div
 *       ref={ref}
 *       style={{
 *         minHeight: '100vh',
 *         display: 'flex',
 *         border: '1px dashed #000',
 *         fontSize: '2rem',
 *       }}
 *     >
 *       <div style={{ margin: 'auto' }}>{props.title}</div>
 *     </div>
 *   )
 * }
 */
export const useIntersectionObserver = (ref: RefObject<Element>) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = ref?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observer = new IntersectionObserver(updateEntry, {
      root: null,
      rootMargin: "0%",
      threshold: 0,
    });

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current]);

  return entry;
};

/**
 * The `useTocObserver` function is a custom React hook that uses the Intersection Observer API to track the
 * active item in a table of contents based on the scroll position.
 * @returns The function `useTocObserver` returns the value of `activeId`, which is a string.
 */
export const useTocObserver = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingElements = [...document.querySelectorAll("h2, h3")];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      {
        // root: null,
        rootMargin: "0px 0px -40% 0px",
        // threshold: 0,
      },
    );

    for (const element of headingElements) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return activeId;
};

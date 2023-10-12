import { Link, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

import clsx from "clsx";
import { useTocObserver } from "~/hooks/use-intersection-observer";

export const TableOfContents = () => {
  const params = useParams();
  const data = useTocData(params?.["*"] ?? "");

  const activeId = useTocObserver();

  return (
    <nav className="sticky top-36 order-1 mt-10 hidden max-h-[calc(100vh-10rem)] w-52 flex-shrink-0 self-start overflow-y-auto pb-4 xl:block">
      <div className="mb-2 flex items-center pb-1 pt-0 text-[1rem] font-bold tracking-wide text-slate-900 dark:text-slate-200">
        On this page
      </div>
      <ul className="flex flex-col flex-wrap gap-2 leading-[1.125]">
        {data.map((toc) => (
          <TocItem key={toc.id} active={activeId} {...toc} />
        ))}
      </ul>
    </nav>
  );
};

interface ItemProps {
  id: string;
  title: string;
  items?: ItemProps[];
}

function useTocData(page: string) {
  const [nested, setNested] = useState<ItemProps[]>([]);

  useEffect(() => {
    const headingElements = [...document.querySelectorAll("h2, h3")];

    const nestedHeadings = [];
    for (const heading of headingElements) {
      const { textContent, id, nodeName } = heading;
      const title = String(textContent)
        .replace(/permalink/, "")
        .trim();

      if (nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (nodeName === "H3" && nestedHeadings.length > 0) {
        // If items array is undefined, create it
        if (!nestedHeadings.at(-1)?.items) {
          nestedHeadings[nestedHeadings.length - 1].items = [];
        }
        // @ts-expect-error - TS doesn't know that items is defined now
        nestedHeadings.at(-1).items.push({
          id,
          title,
        });
      }
    }

    setNested(nestedHeadings);
  }, [page]);

  return nested;
}

interface TocItemProps extends ItemProps {
  active: string;
}

function TocItem(toc: TocItemProps) {
  const isActive = toc.active === toc.id;

  return (
    <>
      <li
        className={clsx(
          isActive ? "text-hp" : "dark:text-gray-400 text-gray-700",
        )}
      >
        <Link
          className={clsx(
            "group relative my-1 rounded-md border-transparent pb-1 text-sm transition-colors duration-150 ease-in-out",
          )}
          to={`#${toc.id}`}
        >
          {toc.title}
        </Link>
      </li>
      {toc.items && toc.items.length > 0 && (
        <ul className="ml-4 flex flex-col flex-wrap gap-2 leading-[1.125]">
          {toc.items.map((child) => (
            <TocItem key={child.id} active={toc.active} {...child} />
          ))}
        </ul>
      )}
    </>
  );
}

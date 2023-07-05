import type { MetaFunction, LoaderFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { motion } from "framer-motion";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { Sidebar } from "~/components/sidebar";
import { Card } from "~/components/card";
import { Tag } from "~/components/tag";
import { Spacer } from "~/components/spacer";
import { MobileMenu } from "~/components/navbar";

import { getMeta } from "~/utils/seo";
import { getUrl } from "~/utils/misc";
import type { Frontmatter } from "~/utils/post.server";
import { getBlogPages } from "~/utils/post.server";
import { filterPosts } from "~/utils/search";

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Blog | 6+";
  const description = "WEB開発関連の情報を発信しています。";

  return {
    ...getMeta({
      url: getUrl(requestInfo),
      title,
      description,
      keywords: "JavaScript, TypeScript, React, Web Development, Blog",
    }),
  };
};

type LoaderData = {
  posts: Array<Frontmatter>;
  tags: string[];
};

export const loader: LoaderFunction = async () => {
  const posts = await getBlogPages("blog");
  const tags = new Set<string>();

  for (const post of posts) {
    for (const category of post.categories ?? []) {
      tags.add(category);
    }
  }

  const data: LoaderData = {
    posts,
    tags: Array.from(tags),
  };

  return json(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
};

export default function Blog() {
  const PAGE_SIZE = 6;
  const queryKey = "q";

  const [searchParams] = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const ignoreInputKeyUp = useRef<boolean>(false);

  const [queryValue, setQuery] = useState<string>(() => {
    return searchParams.get(queryKey) ?? "";
  });
  const query = queryValue.trim();

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const oldQuery = currentSearchParams.get(queryKey) ?? "";
    if (queryValue === oldQuery) return;

    if (queryValue) {
      currentSearchParams.set(queryKey, queryValue);
    } else {
      currentSearchParams.delete(queryKey);
    }
    const newUrl = [window.location.pathname, currentSearchParams.toString()]
      .filter(Boolean)
      .join("?");
    // 通常remixでは、react-router-domのuseSearchParamsでパラメータを更新し、検索パラメータを更新することで検索が更新される。しかし、これはloaderが実行される。すでに持っているデータのクライアントサイドフィルタリングを行うだけ。そこで、`window.history.pushState` を呼び出して、ルータがloaderを起動するのを回避。
    window.history.replaceState(null, "", newUrl);
  }, [queryKey, queryValue]);

  const data = useLoaderData<LoaderData>();

  const regularQuery = query;

  const matchingPosts = useMemo(() => {
    const filteredPosts = data.posts;
    return filterPosts(filteredPosts, regularQuery);
  }, [data.posts, regularQuery]);

  const initialIndexToShow = PAGE_SIZE;
  const [indexToShow, setIndexToShow] = useState(initialIndexToShow);
  useEffect(() => {
    setIndexToShow(initialIndexToShow);
  }, [initialIndexToShow]);

  function toggleTag(tag: string) {
    setQuery((q) => {
      const expression = new RegExp(tag, "ig");

      const newQuery = expression.test(q)
        ? q.replace(expression, "")
        : `${q} ${tag}`;
      return newQuery.replace(/\s+/g, " ").trim();
    });
  }

  const isSearching = query.length > 0;

  const posts = isSearching
    ? matchingPosts.slice(0, indexToShow)
    : matchingPosts
        // .filter(p => p.slug !== data.recommended?.slug)
        .slice(0, indexToShow);

  const hasMorePosts = isSearching
    ? indexToShow < matchingPosts.length
    : indexToShow < matchingPosts.length;

  const visibleTags = isSearching
    ? new Set(matchingPosts.flatMap((post) => post.categories).filter(Boolean))
    : new Set(data.tags);

  return (
    <>
      <div className="bg-slate-200 px-[5vw] py-4 duration-500 dark:bg-slate-800 sm:py-8 lg:hidden">
        <div className="flex max-w-screen-2xl items-center justify-between text-tp">
          <form
            action="/blog"
            method="GET"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <button
                title={query === "" ? "Search" : "Clear search"}
                type="button"
                onClick={() => {
                  setQuery("");
                  ignoreInputKeyUp.current = true;
                  searchInputRef.current?.focus();
                }}
                onKeyDown={() => {
                  ignoreInputKeyUp.current = true;
                }}
                onKeyUp={() => {
                  ignoreInputKeyUp.current = false;
                }}
                className={clsx(
                  "absolute inset-y-1 left-1 flex h-12 w-12 items-center justify-center outline-hp focus:outline-dotted",
                  {
                    "cursor-pointer": query !== "",
                    "cursor-default": query === "",
                  }
                )}
              >
                <MagnifyingGlassIcon className="h-4 w-4 text-ts" />
              </button>
              <input
                ref={searchInputRef}
                type="search"
                value={queryValue}
                onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())}
                onKeyUp={() => {
                  ignoreInputKeyUp.current = false;
                }}
                name="q"
                placeholder="Search posts"
                className="h-14 w-full border-2 border-slate-400 bg-bp px-12 py-4 text-lg font-medium text-tp focus:border-hp focus:outline-none"
              />
              <span className="absolute inset-y-0 right-4 flex h-full items-center justify-between text-lg font-medium text-hp">
                {matchingPosts.length}
              </span>
            </div>
          </form>
          <div>
            <MobileMenu />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-slate-200 px-6 duration-500 dark:bg-slate-800 lg:flex">
        <div className="hidden shrink-0 lg:block">
          <Sidebar>
            <form
              action="/blog"
              className="mb-12"
              method="GET"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <button
                  title={query === "" ? "Search" : "Clear search"}
                  type="button"
                  onClick={() => {
                    setQuery("");
                    ignoreInputKeyUp.current = true;
                    searchInputRef.current?.focus();
                  }}
                  onKeyDown={() => {
                    ignoreInputKeyUp.current = true;
                  }}
                  onKeyUp={() => {
                    ignoreInputKeyUp.current = false;
                  }}
                  className={clsx(
                    "absolute inset-y-1 left-1 flex h-12 w-12 items-center justify-center outline-hp focus:outline-dotted",
                    {
                      "cursor-pointer": query !== "",
                      "cursor-default": query === "",
                    }
                  )}
                >
                  <MagnifyingGlassIcon className="h-4 w-4 text-ts" />
                </button>
                <label>
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={queryValue}
                    onChange={(e) =>
                      setQuery(e.currentTarget.value.toLowerCase())
                    }
                    onKeyUp={() => {
                      ignoreInputKeyUp.current = false;
                    }}
                    name="q"
                    placeholder="Search posts"
                    className="h-14 w-full border-2 border-slate-400 bg-bp px-12 py-4 text-lg font-medium text-tp focus:border-hp focus:outline-none"
                  />
                </label>

                <span className="absolute inset-y-0 right-4 flex h-full items-center justify-between text-lg font-medium text-hp">
                  {matchingPosts.length}
                </span>
              </div>
            </form>
            {/* {data.contents ? (
              <nav className="mb-8 text-tp">
                <h4 className="mb-2 py-1 pt-0 text-base font-medium uppercase">
                  Contents
                </h4>
                <ul className="mb-3">
                  {data.contents.map(content => {
                    return (
                      <li key={content} className="group py-1 pl-2 text-sm">
                        <NavLink
                          to={`#${toKebabCase(content)}`}
                          className="w-auto outline-none hover:text-hp focus:text-hp"
                        >
                          {content}
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            ) : null} */}
            {data.tags.length > 0 ? (
              <>
                <nav className="mb-8 text-tp">
                  <h4 className="mb-2 py-1 pt-0 text-base font-medium uppercase">
                    Tags
                  </h4>
                  <div className="mb-3">
                    {data.tags.map((tag) => {
                      const selected = regularQuery.includes(tag);
                      return (
                        <Tag
                          key={tag}
                          tag={tag}
                          onClick={() => toggleTag(tag)}
                          selected={selected}
                          disabled={!visibleTags.has(tag) && !selected}
                        />
                      );
                    })}
                  </div>
                </nav>
              </>
            ) : null}
          </Sidebar>
        </div>
        <div className="grow pb-12 lg:h-full lg:py-12">
          <header className="py-12">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-center sm:text-4xl xl:mb-8">
              Welcome to 6+ Blog
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400 sm:text-center">
              WEB関連の情報をお届けしています。
            </p>
          </header>
          <Spacer size="2xs" />
          {posts.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-tp">
                {`条件と一致する記事が見つかりませんでした。`}
              </p>
            </div>
          ) : (
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              className="grid gap-x-8 gap-y-16 md:grid-cols-2 2xl:grid-cols-3"
            >
              {posts.map((post) => (
                <Card frontmatter={post} key={post.slug} />
              ))}
            </motion.div>
          )}
          <Spacer size="2xs" />
          {hasMorePosts ? (
            <div className="my-12 w-full text-center">
              <button
                className="btn group gap-2 rounded-full text-lg text-tp transition focus:outline-none"
                onClick={() => setIndexToShow((i) => i + PAGE_SIZE)}
              >
                <span>さらに表示</span>
                <PlusIcon className="h-6 w-6 duration-300 group-hover:rotate-90 group-focus:rotate-90" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

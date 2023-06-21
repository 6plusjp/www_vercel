import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

import { PlusIcon } from "@heroicons/react/outline";

import { Navbar } from "~/components/navbar";
import { WorksCard } from "~/components/card";
import { Spacer } from "~/components/spacer";
import { Footer } from "~/components/footer";

import { getMeta } from "~/utils/seo";
import { getUrl } from "~/utils/misc";
import type { Frontmatter } from "~/utils/post.server";
import { getWorksPages } from "~/utils/post.server";

type LoaderData = {
  posts: Array<Frontmatter>;
  tags: string[];
};
export const loader: LoaderFunction = async () => {
  const posts = await getWorksPages("works");
  const tags = new Set<string>();
  for (const post of posts) {
    for (const category of post.categories ?? []) {
      tags.add(category);
    }
  }

  const data = {
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

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Works | 6+";

  return {
    ...getMeta({
      url: getUrl(requestInfo),
      title,
    }),
  };
};

export default function Works() {
  const PAGE_SIZE = 6;
  const data = useLoaderData<LoaderData>();

  const initialIndexToShow = PAGE_SIZE;
  const [indexToShow, setIndexToShow] = useState(initialIndexToShow);
  useEffect(() => {
    setIndexToShow(initialIndexToShow);
  }, [initialIndexToShow]);
  const posts = data.posts.slice(0, indexToShow);
  const hasMorePosts = indexToShow < posts.length;
  return (
    <>
      <div className="relative min-h-screen bg-bp duration-500">
        <Navbar />
        <div className="container mx-auto px-6">
          <h1 className="mb-12 py-8 text-3xl font-bold text-tp sm:text-4xl">
            Works
          </h1>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 2xl:grid-cols-3">
            {posts.map((post) => (
              <WorksCard frontmatter={post} key={post.slug} />
            ))}
          </div>
          <Spacer size="base" />
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
        <Footer className="bg-bs duration-500" />
      </div>
    </>
  );
}

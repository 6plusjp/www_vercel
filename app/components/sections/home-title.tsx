export function HomeTitle() {
  return (
    <header className="flex min-h-[76vh] px-[8vw] text-tp lg:px-[16vw]">
      <div className="container mx-auto flex flex-col items-start justify-center">
        <h3 className=" max-w-prose text-base font-semibold text-tp sm:text-xl md:text-2xl">
          はじめまして。
        </h3>
        <h2 className="py-2 text-3xl font-semibold text-ts sm:text-5xl md:text-6xl">
          Front-End Developer
        </h2>
        <h1 className="py-6 text-5xl font-semibold text-slate-600 dark:text-slate-100 sm:text-7xl md:text-8xl">
          6+
          <span className="ml-4 animate-pulse text-2xl text-hp md:ml-12 md:text-4xl">
            ロクタス
          </span>
        </h1>
        <p className="mb-12 max-w-md py-6 text-base font-medium text-ts md:text-lg">
          I&apos;m a front-end engineer specializing in building exceptional
          digital experiences. Currently, I&apos;m focused on building
          accessible, human-centered products for a fast and resilient user
          experience.
        </p>
      </div>
    </header>
  );
}

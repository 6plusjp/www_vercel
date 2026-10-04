import clsx from "clsx";

export function AboutSection({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        className,
        "bg-bs py-16 text-center text-ts duration-500",
      )}
    >
      <div className="container mx-auto px-[5vw]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="py-4 text-3xl font-semibold text-tp sm:text-4xl">
            About Me
          </h2>
          <div className="py-16 text-left">
            <h3 className="mb-4 text-lg font-semibold text-tp sm:text-xl lg:text-2xl">
              Shoma Yamamoto
            </h3>
            <p className="mb-8 text-base lg:text-lg">
              大阪出身。平成7年生まれ。
              <br />
              2020年から独力でWEBを学ぶ。
              <br />
              アクセシビリティと保守性を意識したWebアプリケーションの開発に取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

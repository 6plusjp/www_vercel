import { useRef, useState } from "react";
import { buildImageUrl, setConfig } from "cloudinary-build-url";
import clsx from "clsx";

import type { ImgProps } from "~/utils/post.server";
import { Skeleton } from "./skeleton";

setConfig({
  cloudName: "six-plus-jp",
});

function PostImage({
  imgId,
  alt,
  className,
  page,
  ...rest
}: {
  imgId: string;
  alt?: string;
  className?: string;
  page: "page" | "blog" | "works";
} & React.HTMLAttributes<HTMLDivElement>) {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const options: ImgProps = {
    widths: [],
    sizes: [],
    transformations: {
      // background: 'rgb:e6e9ee',
      resize: {
        type: "fill",
        aspectRatio: "16:9",
      },
    },
  };
  if (page === "blog") {
    options.widths = [280, 560, 840];
    options.sizes = [
      "(max-width:767px) 0vw",
      "(min-width:768px) and (max-width:1023px) 45vw",
      "(min-width:1024px) and (max-width:1535px) 30vw",
      "25vw",
    ];
  } else if (page === "works") {
    options.widths = [280, 560, 840];
    options.sizes = [
      "(max-width:767px) 80vw",
      "(min-width:768px) and (max-width:1535px) 45vw",
      "25vw",
    ];
  } else if (page === "page") {
    options.widths = [280, 560, 840, 1100];
    options.sizes = [
      "(max-width:767px) 95vw",
      "(min-width:768px) and (max-width:1023px) 740px",
      "(min-width:1024px) and (max-width:1279px) 80vw",
      "900px",
    ];
  } else {
    options.widths = [280, 560, 840];
    options.sizes = [
      "(max-width:639px) 0vw",
      "(min-width:640px) and (max-width:767px) 0vw",
      "(min-width:768px) and (max-width:1023px) 45vw",
      "(min-width:1024px) and (max-width:1535px) 30vw",
      "(min-width:1536px) 25vw",
    ];
  }

  const { widths, sizes, transformations } = options;

  const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length);

  return (
    <>
      <div className="aspect-none md:aspect-w-16 md:aspect-h-9">
        {!visible && (
          <Skeleton
            animation="wave"
            className={clsx(
              "h-full w-full bg-slate-300 transition-opacity dark:bg-slate-700"
            )}
          />
        )}
        <img
          ref={imgRef}
          src={buildImageUrl(imgId, {
            quality: "auto",
            format: "auto",
            ...transformations,
            transformations: {
              resize: { width: averageSize, ...transformations?.resize },
            },
          })}
          alt={alt ?? ""}
          onLoad={() => setVisible(true)}
          srcSet={widths
            .map((width) =>
              [
                buildImageUrl(imgId, {
                  quality: "auto",
                  format: "auto",
                  ...transformations,
                  transformations: {
                    resize: { width, ...transformations?.resize },
                  },
                }),
                `${width}w`,
              ].join(" ")
            )
            .join(", ")}
          sizes={sizes.join(", ")}
          className={clsx(
            className,
            "h-full w-full object-cover object-center text-transparent"
          )}
          {...rest}
        />
        <noscript>
          <img
            srcSet={widths
              .map((width) =>
                [
                  buildImageUrl(imgId, {
                    quality: "auto",
                    format: "auto",
                    ...transformations,
                    transformations: {
                      resize: { width, ...transformations?.resize },
                    },
                  }),
                  `${width}w`,
                ].join(" ")
              )
              .join(", ")}
            sizes={sizes.join(", ")}
            alt={alt ?? ""}
            src={buildImageUrl(imgId, {
              quality: "auto",
              format: "auto",
              ...transformations,
              transformations: {
                resize: { width: averageSize, ...transformations?.resize },
              },
            })}
            className={clsx(
              className,
              "h-full w-full object-cover object-center text-center transition"
            )}
            {...rest}
          />
        </noscript>
      </div>
    </>
  );
}

export { PostImage };

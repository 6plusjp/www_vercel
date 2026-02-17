import type { CldOptions, Resize } from "@cld-apis/types";
import { buildImageUrl } from "cloudinary-build-url";
import clsx from "clsx";
import { forwardRef, useState } from "react";

import { Skeleton } from "./skeleton";

const CLOUD_NAME = "six-plus-jp";
const defaultWidths = [280, 560, 840];
const defaultSizes = [
  "(max-width:639px) 0vw",
  "(min-width:640px) and (max-width:767px) 0vw",
  "(min-width:768px) and (max-width:1023px) 45vw",
  "(min-width:1024px) and (max-width:1535px) 30vw",
  "(min-width:1536px) 25vw",
].join(", ");

interface ImgProps extends React.ComponentPropsWithoutRef<"img"> {
  imgId: string;
  widths?: number[];
  buildUrlProps?: CldOptions;
}

export const PostImage = forwardRef<HTMLImageElement, ImgProps>(
  function PostImage(
    {
      imgId,
      className,
      widths = defaultWidths,
      sizes = defaultSizes,
      buildUrlProps,
      alt,
      ...props
    },
    ref,
  ) {
    const [visible, setVisible] = useState(false);
    const averageSize = Math.ceil(
      widths.reduce((prev, current) => prev + current) / widths.length,
    );

    const getImgUrl = ({ width }: Resize) =>
      buildImageUrl(imgId, {
        cloud: { ...buildUrlProps?.cloud, cloudName: CLOUD_NAME },
        transformations: {
          ...buildUrlProps?.transformations,
          resize: {
            ...buildUrlProps?.transformations?.resize,
            width,
          },
        },
      });

    const Img = () => (
      <img
        ref={ref}
        className={clsx(
          className,
          "h-full w-full object-cover object-center text-transparent",
        )}
        src={getImgUrl({ width: averageSize })}
        alt={alt ?? ""}
        srcSet={widths
          .map((width) => [getImgUrl({ width }), `${width}w`].join(" "))
          .join(", ")}
        sizes={sizes}
        onLoad={() => setVisible(true)}
        {...props}
      />
    );

    return (
      <>
        <div className="aspect-none md:aspect-h-9 md:aspect-w-16">
          {!visible && (
            <Skeleton
              animation="wave"
              className={clsx(
                "h-full w-full bg-slate-300 transition-opacity dark:bg-slate-700",
              )}
            />
          )}
          <Img />
          <noscript>
            <Img />
          </noscript>
        </div>
      </>
    );
  },
);

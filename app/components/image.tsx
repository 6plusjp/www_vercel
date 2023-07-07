// import { ComponentProps, forwardRef, useMemo } from "react";

// type ResponsiveSize = {
//   size: {
//     width: number;
//     height?: number;
//   };
//   maxWidth?: number;
// };

// interface ImageProps extends ComponentProps<"img"> {
//   loaderUrl?: string;
//   responsive?: ResponsiveSize[];
// }

// const useResponsiveImage = (
//   image: {
//   src?: string;
// },
//   loaderUrl: string,
//   responsive: ResponsiveSize[],
// ): {
//   src: string;
//   srcSet?: string;
//   sizes?: string;
// } => {
//   return useMemo(() => {
//     let largestSrc = image.src || "";
//     let largestWidth = 0;
//     const srcSet: string[] = [];

//     for (const { size } of responsive) {
//       const srcSetUrl = encodeQuery(loaderUrl, {
//         src: encodeURI(image.src || ""),
//         width: size.width,
//         height: size.height,
//         ...options,
//       });

//       srcSet.push(srcSetUrl + ` ${size.width}w`);

//       if (size.width > largestWidth) {
//         largestWidth = size.width;
//         largestSrc = srcSetUrl;
//       }
//     }

//     const sizes = [...responsive].sort(sizeComparator).map(sizeConverter);

//     if (responsive.length === 1 && responsive[0].maxWidth != null) {
//       sizes.push(`${responsive[0].size.width}px`);
//     }

//     return {
//       src: largestSrc,
//       ...(srcSet.length && {
//         srcSet: srcSet.join(", "),
//         sizes: sizes.join(", "),
//       }),
//     };
//   }, [image.src, loaderUrl, responsive, options]);
// };

// export const Image=forwardRef<HTMLImageElement,ImageProps>({classname,url,responsive,options,...imgProps},ref)=>{
//   const responsiveProps = useResponsiveImage(
//       imgProps,
//       loaderUrl,
//       responsive,
//     );
// return (
//       <img
//         ref={ref}
//         className={clsx(classes.root, className)}
//         {...imgProps}
//         {...responsiveProps}
//       />
//     );
// }

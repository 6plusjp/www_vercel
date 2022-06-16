// import type { LoaderFunction } from "remix";
// import type { SKRSContext2D } from "@napi-rs/canvas";
// import { createCanvas, Image } from "@napi-rs/canvas";

// import { toTitleCase } from "~/utils/string";
// import { readFileSync } from "fs-extra";
// import path from "~/utils/path.server";

// export const loader: LoaderFunction = async ({ params }) => {
//   if (!params.id) {
//     return null;
//   }

//   const img = await generateImg(params.id);

//   return new Response(img, {
//     status: 200,
//     headers: {
//       "Content-Type": "image/png",
//       "Cache-Control": "public, max-age=2419200",
//     },
//   });
// };

// const defaultProps = {
//   width: 1200,
//   height: 630,
//   fontSize: 80,
//   margin: 60,
//   logoImage: "public/images/logo.png",
//   author: "6+ Blog",
//   radius: 140,
//   font: "Inter",
//   primaryColor: "#7f5af0",
//   secondaryColor: "#2cb67d",
// };

// const generateImg = async (id: string) => {
//   const title = toTitleCase(id);
//   const {
//     width,
//     height,
//     fontSize,
//     margin,
//     logoImage,
//     author,
//     radius,
//     font,
//     primaryColor,
//     secondaryColor,
//   } = defaultProps;
//   const canvas = createCanvas(width, height);
//   const ctx = canvas.getContext("2d");

//   // Draw background gradient
//   const gradient = ctx.createLinearGradient(0, width, width, height);
//   gradient.addColorStop(0.3, primaryColor);
//   gradient.addColorStop(1, secondaryColor);
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, width, height);

//   // Calculate font sizes and metrics
//   ctx.font = `bold ${fontSize}px ${font}`;
//   const titleLines = getLines(ctx, title, width - margin * 2);
//   const lineHeight = fontSize * 1.2;
//   // const textHeight = titleLines.length * lineHeight;

//   // Draw title text
//   titleLines
//     .map((line, index) => ({
//       text: line,
//       x: margin,
//       y: height / 2 + index * lineHeight,
//     }))
//     .forEach(({ text, x, y }) => {
//       ctx.fillStyle = "#000";
//       ctx.fillText(text, x, y);
//     });

//   // Where to start drawing author info
//   const brandText = height / 4;

//   // Draw the picture
//   if (logoImage) {
//     const data = readFileSync(path.resolve(logoImage));
//     const img = new Image(100, 100);
//     img.src = data;
//     const x = margin;
//     const y = brandText - radius + lineHeight / 2;
//     ctx.drawImage(img, x, y, radius, radius);
//   }

//   // Draw the author's name
//   // const authorNameImageSpacing = 570;
//   const authorNameImageSpacing = 0;
//   const authorNamePosition = {
//     x:
//       logoImage === undefined
//         ? margin + authorNameImageSpacing
//         : margin + radius + authorNameImageSpacing,
//     y: brandText,
//   };
//   ctx.font = `${fontSize * 0.8}px ${font}`;
//   ctx.fillText(author, authorNamePosition.x, authorNamePosition.y);

//   return canvas.toBuffer("image/png");
// };

// const getLines = (ctx: SKRSContext2D, text: string, maxWidth: number) => {
//   const words = text.split(" ");
//   const lines = [];
//   let currentLine = words[0];

//   for (let i = 1; i < words.length; i++) {
//     const word = words[i];
//     const width = ctx.measureText(currentLine + " " + word).width;
//     if (width < maxWidth) {
//       currentLine += " " + word;
//     } else {
//       lines.push(currentLine);
//       currentLine = word;
//     }
//   }
//   lines.push(currentLine);
//   return lines;
// };

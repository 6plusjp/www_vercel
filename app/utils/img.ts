import type { LoaderFunction } from "remix";
import type { CanvasRenderingContext2D } from "canvas";
import { createCanvas, loadImage } from "canvas";

import { notFound } from "~/utils/responses";
import { toTitleCase } from "~/utils/string";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.id) {
    notFound({});
  }

  const img = params.id === "og" ? `` : generateImg(params.id);

  return new Response(img, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=2419200",
    },
  });
};

type GenerateSocialImage = {
  // The name of the content.
  title: string;
  // Author name to display.
  author?: string;
  // Width of the social image.
  width?: number;
  // Height of the social image.
  height?: number;
  // Font size to use for the title and author name.
  fontSize?: number;
  // How much margin to leave around the edges of the image.
  margin?: number;
  // Path to the author profile image to display.
  profileImage?: string;
  // The radius of the author's profile image, if an image is supplied.
  profileRadius?: number;
  // The font to use for all text in the social image.
  font?: string;
};
const defaultProps = {
  width: 630,
  height: 1200,
  fontSize: 80,
  margin: 60,
  image: "",
  profileRadius: 120,
  font: "Inter",
};

const generateImg = async (id: string) => {
  const title = toTitleCase(id);
  const { width, height, fontSize, margin, font } = defaultProps;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Draw background gradient
  const gradient = ctx.createLinearGradient(0, width, width, height);
  gradient.addColorStop(0.3, "#6ee7b7");
  gradient.addColorStop(1, "#60A5FA");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Calculate font sizes and metrics
  ctx.font = `bold ${fontSize}px ${font}`;
  const titleLines = getLines(ctx, title, width - margin * 2);
  const lineHeight = fontSize * 1.2;
  const textHeight = titleLines.length * lineHeight;

  // Draw title text
  titleLines
    .map((line, index) => ({
      text: line,
      x: margin,
      y: (height - textHeight) / 2 + index * lineHeight,
    }))
    .forEach(({ text, x, y }) => {
      ctx.fillStyle = "#000";
      ctx.fillText(text, x, y);
    });

  // Vertical spacing after the title before drawing the author info
  const spacingAfterTitle = 50;
  // Where to start drawing author info
  const bottomOfTitleText = height / 2 + textHeight / 2 + spacingAfterTitle;

  // Draw the author's profile picture
  // if (profileImage) {
  //   const img = await loadImage(profileImage);
  //   const x = margin;
  //   const y = bottomOfTitleText - profileRadius + lineHeight / 2;
  //   ctx.drawImage(img, x, y, profileRadius, profileRadius);
  // }

  // Draw the author's name
  // const authorNameImageSpacing = 25;
  // const authorNamePosition = {
  //   x:
  //     profileImage === undefined
  //       ? margin + authorNameImageSpacing
  //       : margin + profileRadius + authorNameImageSpacing,
  //   y: bottomOfTitleText,
  // };
  // ctx.font = `${fontSize}px ${font}`;
  // ctx.fillText(author, authorNamePosition.x, authorNamePosition.y);

  return canvas.toBuffer("image/png");
};

const getLines = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
) => {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
};

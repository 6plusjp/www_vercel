import clsx from "clsx";
import React from "react";

import { ExternalLink } from "./external-link";

function SponsorCard({
  className,
  href,
  text,
  children,
}: {
  className?: string;
  href: string;
  text?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(className, "group")}>
      <ExternalLink
        href={href}
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <div className="flex h-full w-full flex-col items-center justify-center opacity-100 group-hover:opacity-10">
          {children}
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <p>{text}</p>
        </div>
      </ExternalLink>
    </div>
  );
}

export { SponsorCard };

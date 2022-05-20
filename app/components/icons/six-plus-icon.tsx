interface Props {
  size?: number;
}

function SixPlusIcon({ size = 24 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1155 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="6+ icon"
    >
      <g clip-path="url(#clip0_301_15)">
        <rect
          className="fill-bp"
          width="1155"
          height="1000"
          // fill="black"
        />
        <path
          className="fill-black dark:fill-white"
          d="M578.344 0L1155.69 1000H1L578.344 0Z"
          // fill="white"
        />
        <rect
          className="fill-bp"
          x="578"
          width="577"
          height="500"
          // fill="black"
        />
        <rect
          className="fill-bp"
          x="78"
          y="500"
          width="500"
          height="300"
          // fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_301_15">
          <rect
            className="fill-black dark:fill-white"
            width="1155"
            height="1000"
            // fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export { SixPlusIcon };

interface Props {
  size?: number;
}

export function SixPlusIcon({ size = 24 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1500 1500"
      className="dark:fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>6+</title>
      <path d="m1066.43 749-299.997.25V1097h-500L166 1270.46l1200.43-.46-299.56-520.75m-600.87.365L766 230m-.067.25L766 749.615l-299.567.135" />
    </svg>
  );
}

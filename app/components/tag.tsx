import clsx from "clsx";
import * as Checkbox from "@radix-ui/react-checkbox";

interface Props {
  tag: string;
  selected: boolean;
  onChange?: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
}

export const Tag = ({ tag, selected, onChange, disabled }: Props) => (
  <>
    <label className="w-full cursor-pointer">
      <Checkbox.Root
        checked={selected}
        onCheckedChange={onChange}
        className={clsx(
          "relative block h-auto w-auto py-1 pl-2 text-sm focus:shadow-none",
          {
            "text-tp": !selected,
            "text-hp": selected,
            "hover:opacity-50": !disabled,
            "line-through opacity-25": disabled,
          },
        )}
        disabled={disabled}
      >
        {tag}
      </Checkbox.Root>
    </label>
  </>
);

import { clx } from "site/sdk/clx.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  /**
   * @title Texto de copyrights
   */
  text?: string;
}

export default function SimpleFooter(
  { text = "VTEX © 2024. All rights reserved" }: Props,
) {
  return (
    <footer
      style={{
        "--padding-y": "46.5px",
      }}
      class={clx(
        "bg-neutral py-[var(--padding-y)]",
        "flex flex-col gap-6 items-center",
      )}
    >
      <Icon
        id="Logo"
        width={143.29}
        height={24}
        class="text-secondary"
      />
      <small class={clx("text-body-small text-center text-base-content ")}>
        {text}
      </small>
    </footer>
  );
}

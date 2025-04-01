import { clx } from "site/sdk/clx.ts";

export interface Item {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Destaque
   */
  emphasis?: string;
  /**
   * @title Descrição
   */
  description?: string;
}

export interface Props {
  content?: Item[];
}

export default function BigNumbers({
  content = [
    {
      title: "CTR",
      emphasis: "2.5 avg",
      description: "Comparado as métricas de mercado",
    },
    {
      title: "ROAS",
      emphasis: "5x avg",
      description: "Comparado as métricas de mercado",
    },
    {
      title: "Vendas através de anúncios",
      emphasis: "+ 4MM",
      description: "Valor em dolares (FY 2022)",
    },
  ],
}: Props) {
  return (
    <section
      class={clx(
        "w-full",
        "px-3 lg:px-0",
      )}
    >
      <article
        class={clx(
          "w-full relative bg-neutral",
          "rounded-3xl lg:rounded-none",
        )}
      >
        <div
          style={{
            "--max-width": "1200px",
          }}
          class={clx(
            "w-full py-12  px-9 lg:px-20 mx-auto max-w-[var(--max-width)]",
            "flex flex-col gap-14 lg:flex-row",
            "lg:justify-between",
          )}
        >
          {content?.map(({
            title,
            emphasis,
            description,
          }) => (
            <div class="flex flex-col items-center lg:items-start">
              <span
                class={clx(
                  "uppercase font-medium text-secondary",
                  "text-tag-medium lg:text-tag-large",
                )}
              >
                {title}
              </span>
              <span
                style={{
                  "--color-token-1": "#8DB9FA",
                  "--color-token-2": "#BE4D93",
                  "--color-token-3": "#F71863",
                  "background":
                    "linear-gradient(266.37deg, var(--color-token-1) 44.93%, var(--color-token-2) 64.69%, var(--color-token-3) 94.97%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
                class={clx(
                  "bg-clip-text font-bold uppercase",
                  "text-[62px] lg:text-[70px]",
                )}
              >
                {emphasis}
              </span>

              <p
                class={clx(
                  "font-medium text-body-medium",
                  "text-[#DCDFE5]",
                )}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

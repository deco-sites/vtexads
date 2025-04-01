import { Picture, Source } from "apps/website/components/Picture.tsx";
import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";

/**
 * @title {{{title}}}
 */
export interface Item {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Descrição
   */
  description?: TextArea;
  /**
   * @title Imagem
   */
  image?: {
    /**
     * @title Imagem desktop
     */
    desktop?: ImageWidget;
    /**
     * @title Imagem mobile
     */
    mobile?: ImageWidget;
    /**
     * @title Texto alternativo da imagem
     */
    alt?: string;
  };
}

export interface Props {
  /**
   * @title Título
   * @description Suporta conversão de links no formato [texto](url) e texto em negrito no formato ***texto***.
   */
  title?: string;
  /**
   * @title Descrição
   */
  description?: TextArea;
  /**
   * @title Grid
   */
  grid?: Item[];
}

export default function Hero({
  title = "Todos seus anúncios. Uma plataforma.",
  description = "Unificando o cenário fragmentado da publicidade.",
  grid = [],
}: Props) {
  return (
    <section
      class={clx(
        "w-full relative",
      )}
    >
      <div
        style={{
          "--max-width": "1200px",
          "--padding-y": "72px",
        }}
        class={clx(
          "w-full py-16 px-4 pb-20 lg:py-[var(--padding-y)] lg:px-0 mx-auto max-w-[var(--max-width)]",
          "flex flex-col gap-6 lg:gap-12",
        )}
      >
        <div class="flex flex-col gap-6 max-w-80 sm:max-w-fit mx-auto">
          <h2
            class={clx(
              "font-normal text-display-small lg:text-display-medium",
              "text-center text-neutral",
              "tracking-[var(--letter-spacing-m)] lg:tracking-[var(--letter-spacing-d)]",
              "text-balance",
            )}
            style={{
              "--letter-spacing-m": "-1px",
              "--letter-spacing-d": "-2px",
            }}
          >
            {title}
          </h2>
          <p class="font-normal text-body-larget text-center text-pretty">
            {description}
          </p>
        </div>
        <div class="flex gap-4 flex-col sm:flex-row lg:items-stretch">
          {grid.map(({ title, description, image }) => (
            <div
              class={clx(
                "w-full lg:w-1/3 rounded-xl lg:rounded-none overflow-hidden",
                "flex flex-col lg:odd:flex-col-reverse lg:gap-4 flex-grow",
              )}
            >
              <div class="w-full">
                <Picture>
                  <Source
                    media="(max-width: 767px)"
                    src={image?.mobile ?? "https://placehold.co/343x165"}
                    width={343}
                    height={165}
                  />
                  <Source
                    media="(min-width: 768px)"
                    src={image?.desktop ?? "https://placehold.co/400x243"}
                    width={400}
                    height={243}
                  />
                  <img
                    class="w-full h-full object-cover"
                    src={image?.mobile}
                    alt={image?.alt ?? title}
                    loading="lazy"
                  />
                </Picture>
              </div>
              <div
                class={clx(
                  "rounded-b-xl lg:rounded-xl bg-info p-8 flex flex-col gap-6 flex-grow",
                  "justify-center overflow-hidden",
                )}
              >
                <h3
                  style={{
                    "--letter-spacing-m": "-2%",
                    "--letter-spacing-d": "-1px",
                    "--line-height": "32.2px",
                  }}
                  class={clx(
                    "font-medium text-title-large lg:text-headline-medium text-neutral text-left",
                    "lg:leading-[var(--line-height)]",
                    "tracking-[var(--letter-spacing-m)] lg:tracking-[var(--letter-spacing-d)]",
                  )}
                >
                  {title}
                </h3>
                <p
                  style={{
                    "--letter-spacing-m": "-2%",
                    "--letter-spacing-d": "-1px",
                  }}
                  class={clx(
                    "font-normal text-body-medium lg:text-body-large text-base-content text-left",
                    "tracking-[var(--letter-spacing-m)] lg:tracking-[var(--letter-spacing-d)]",
                  )}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

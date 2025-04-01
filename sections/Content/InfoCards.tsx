import { TextArea } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import { AvailableIcons } from "site/components/ui/Icon.tsx";
import Icon from "site/components/ui/Icon.tsx";

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
   * @title Ícone
   * @format icon-select
   * @options site/loaders/availableIcons.ts
   */
  icon: AvailableIcons;
  /**
   * @title Card em destaque?
   */
  highlighted?: boolean;
}

export interface Props {
  /**
   * @title Título
   * @description Suporta conversão de links no formato [texto](url) e texto em negrito no formato ***texto***.
   */
  title?: string;
  /**
   * @title Cards
   */
  cards?: Item[];
}

export default function InfoCards({
  title = "Nosso ecossistema conta com diversas categorias de parceiros:",
  cards = [],
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
              "text-pretty",
              "mx-auto max-w-[var(--max-width)]",
            )}
            style={{
              "--letter-spacing-m": "-1px",
              "--letter-spacing-d": "-2px",
              "--max-width": "812px",
            }}
          >
            {title}
          </h2>
        </div>
        <div class="flex gap-4 flex-col sm:flex-row lg:items-stretch relative">
          {
            /* <div
            class={clx(
              "absolute top-0 left-1/2 -translate-x-1/2 h-full bg-base-300 w-[1px]",
              "top-1/2 -translate-x-0 -translate-y-1/2 left-0 lg:h-[1px] lg:w-full",
            )}
          /> */
          }
          {cards.map(({ title, description, icon, highlighted }) => {
            const highlightedStyle = {
              card: {
                "padding": "2px",
                background:
                  "linear-gradient(112.72deg, #C7DBFF 0%, #E3EDFF 68.92%, #FFFFFF 115.93%)",
                "box-shadow": "8px 7px 24px 0px #2738690F",
              },
            };

            return (
              <div
                class={clx(
                  "w-full lg:w-1/3 rounded-xl",
                  "flex flex-col lg:gap-4 flex-grow",
                  "z-10",
                  !highlighted && "border border-base-300 opacity-50",
                )}
                style={{
                  ...(highlighted ? highlightedStyle.card : {}),
                }}
              >
                <div
                  class={clx(
                    "bg-secondary w-full h-full flex flex-col p-6 rounded-xl overflow-hidden",
                  )}
                >
                  <Icon
                    id={icon}
                    width={62}
                    height={62}
                  />
                  <div
                    class={clx(
                      "flex flex-col gap-3 flex-grow mt-6",
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
                        "font-medium text-headline-medium text-left",
                        "text-neutral",
                        "lg:leading-[var(--line-height)]",
                        "tracking-[var(--letter-spacing-m)] lg:tracking-[var(--letter-spacing-d)]",
                      )}
                    >
                      {title}
                    </h3>
                    <p
                      class={clx(
                        "font-normal text-body-large text-left",
                        "text-base-content",
                      )}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

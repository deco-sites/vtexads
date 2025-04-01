import { ImageWidget } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Logo {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Logo
   */
  image?: ImageWidget;
  /**
   * @title Largura da logo
   */
  width?: number;
  /**
   * @title Altura da logo
   */
  height?: number;
}

export interface ShowcaseItem {
  /**
   * @title Label
   */
  label: string;
  /**
   * @title Conjunto de logos
   */
  logos?: Logo[];
}

export interface Props {
  /**
   * @title Título
   * @description Suporta conversão de links no formato [texto](url) e texto em negrito no formato ***texto***.
   */
  title?: string;
  /**
   * @title Showcases
   */
  showcase?: ShowcaseItem[];
}

export default function Showpartners({
  title = "Aumente sua receita com anúncios",
  showcase = [],
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
          "flex flex-col gap-9",
        )}
      >
        <div class="flex flex-col max-w-80 sm:max-w-fit mx-auto">
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
        </div>
        <div class={clx("flex flex-col gap-4")}>
          {showcase?.map((showCaseItem) => (
            <div
              class="flex items-center py-6 bg-white bg-opacity-70 border border-base-300 backdrop-blur-sm"
              style={{ gap: "10px" }}
            >
              <div
                style={{
                  "--padding-y": "5.37px",
                }}
                class={clx(
                  "px-6 py-[var(--padding-y)]",
                  "font-medium text-tag-medium text-base-content",
                  "uppercase text-center",
                )}
              >
                {showCaseItem?.label}
              </div>
              <div
                style={{
                  height: "56px",
                }}
                class="w-full overflow-hidden rounded-lg flex items-center group"
              >
                <div class="marquee w-full" style={{ "--gap": "42px" }}>
                  <ul class="marquee__content animate-sliding group-hover:pause">
                    {showCaseItem.logos?.map((
                      {
                        title = "Brand",
                        image = "https://placehold.co/160x28",
                        width,
                        height,
                      },
                    ) => (
                      <li class="flex items-center gap-3">
                        <Image
                          src={image}
                          alt={title}
                          width={width ?? 160}
                          height={height ?? 27}
                          class="object-contain"
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                  <ul
                    aria-hidden="true"
                    class="marquee__content animate-sliding group-hover:pause"
                  >
                    {showCaseItem.logos?.map((
                      {
                        title = "Brand",
                        image = "https://placehold.co/160x28",
                        width,
                        height,
                      },
                    ) => (
                      <li class="flex items-center gap-3">
                        <Image
                          src={image}
                          alt={title}
                          width={width ?? 160}
                          height={height ?? 27}
                          class="object-contain"
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="flex flex-col lg:flex-row gap-7 items-center lg:items-baseline justify-center">
          <a
            href={"#"}
            class={clx(
              "py-4 px-6 lg:py-3",
              "bg-accent uppercase text-white text-base font-medium",
              "hover:bg-accent-content transition-colors duration-300",
            )}
            style={{ borderRadius: "50px", letterSpacing: "-0.5px" }}
          >
            Seja um parceiro
          </a>
        </div>
      </div>
    </section>
  );
}

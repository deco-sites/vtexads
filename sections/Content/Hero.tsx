import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import { markdownToHtml } from "site/sdk/markdown.ts";
import { useDevice } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Brand {
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

export interface Props {
  /**
   * @title Título
   * @description Suporta conversão de links no formato [texto](url) e texto em negrito no formato ***texto***.
   */
  title?: string;
  /**
   * @title Descrição desktop
   */
  description?: TextArea;
  /**
   * @title Descrição mobile
   */
  descriptionMobile?: TextArea;
  /**
   * @title Botão
   */
  cta?: {
    /**
     * @title Texto
     */
    label?: string;
    /**
     * @title Link
     */
    href?: string;
  };
  /**
   * @title Marcas
   */
  brands?: Brand[];
}

export default function Hero({
  title = "A plataforma de ***Retail Media*** com o poder da IA.",
  description =
    "Emponderamos os anunciantes a descobrir  novas possibilidades para impulsionar a lucratividade.",
  descriptionMobile =
    "Emponderamos os anunciantes a descobrir  novas possibilidades para impulsionar a lucratividade.",
  cta = {
    label: "Assistir demo",
    href: "#",
  },
  brands = [],
}: Props) {
  const device = useDevice();
  const isMobile = device !== "desktop";

  return (
    <section
      style={{
        background: `linear-gradient(0deg, #142032, #142032), 
        radial-gradient(45.1% 293.77% at 77.05% -0.07%, #152B47 0%, #152133 100%), 
        linear-gradient(180deg, #F5F9FF -0.01%, #F5F9FF 16.26%, rgba(245, 249, 255, 0) 16.29%)`,
      }}
      class={clx(
        "w-full relative square-bg",
        "rounded-bl-3xl rounded-br-3xl lg:rounded-bl-[56px] lg:rounded-br-[56px]",
      )}
    >
      <div
        style={{
          "--max-width": "1200px",
          "--padding-bottom": "120px",
        }}
        class={clx(
          "w-full pt-36 px-5 pb-20 lg:pt-44 lg:pb-[var(--padding-bottom)] mx-auto max-w-[var(--max-width)]",
          "flex flex-col",
        )}
      >
        <div
          class="w-full mx-auto flex flex-col items-center px-6 lg:px-0"
          style={{ maxWidth: "866px" }}
        >
          <h2
            style={{
              "--line-height": "44px",
              "--letter-spacing": "-3px",
            }}
            class={clx(
              "text-[40px] leading-[var(--line-height)] tracking-[var(--letter-spacing)]",
              "lg:!text-display-biglarge text-secondary",
              "text-center text-balance lg:text-pretty font-light",
            )}
            dangerouslySetInnerHTML={{ __html: markdownToHtml(title) }}
          />
          <p
            style={{
              "--max-width": "560px",
            }}
            class={clx(
              "text-center text-balance lg:text-pretty text-secondary font-normal",
              "mt-4 lg:mt-8",
              "mx-auto max-w-[var(--max-width)]",
            )}
          >
            {isMobile ? descriptionMobile : description}
          </p>
          <div class="flex mt-8">
            <a
              href={cta?.href ?? "#"}
              class={clx(
                "py-4 px-6 lg:py-3",
                "bg-accent uppercase text-white text-base lg:text-sm",
                "hover:bg-accent-content transition-colors duration-300",
              )}
              style={{ borderRadius: "50px", letterSpacing: "-0.5px" }}
            >
              {cta?.label}
            </a>
          </div>
        </div>
        <div
          style={{
            height: "58px",
          }}
          class="mt-20 lg:mt-[120px] w-full bg-info overflow-hidden rounded-lg flex items-center group"
        >
          <div class="marquee w-full">
            <ul class="marquee__content animate-sliding group-hover:pause">
              {brands?.map((
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
              {brands?.map((
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
    </section>
  );
}

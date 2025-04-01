import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import { markdownToHtml } from "site/sdk/markdown.ts";
import Image from "apps/website/components/Image.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Banner {
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
}

export interface Props {
  /**
   * @title Título superior
   */
  titleSup?: string;
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
   * @title Banner
   */
  banner?: Banner;
}

export default function HeroImage({
  titleSup = "Mais projetos. Mais receita. Mais visibilidade.",
  title = "Aumente a sua receita sendo um dos nossos parceiros.",
  description =
    "Acesse conteúdos exclusivos para parceiros, conquiste novos clientes e aumente suas vendas.",
  cta = {
    label: "Assistir demo",
    href: "#",
  },
  ...props
}: Props) {
  return (
    <section
      style={{
        background:
          `linear-gradient(0deg, #142032, #142032), radial-gradient(45.1% 293.77% at 77.05% -0.07%, #152B47 0%, #152133 100%)`,
      }}
      class={clx(
        "w-full relative",
      )}
    >
      <div
        style={{
          "--max-width": "1200px",
        }}
        class={clx(
          "w-full pt-36 lg:pt-44 mx-auto max-w-[var(--max-width)]",
          "flex flex-col",
        )}
      >
        <div
          class="w-full mx-auto flex flex-col items-center px-6 lg:px-0 gap-8 lg:gap-[42px]"
          style={{ maxWidth: "894px" }}
        >
          <p
            style={{
              "--max-width": "560px",
            }}
            class={clx(
              "text-center text-balance lg:text-pretty text-secondary font-normal",
              "mx-auto max-w-[var(--max-width)]",
              "text-tag-medium lg:text-tag-large uppercase",
            )}
          >
            {titleSup}
          </p>
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
              color: "#F5F1FE",
            }}
            class={clx(
              "mx-auto  text-center",
            )}
          >
            {description}
          </p>
          <div class="flex">
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
        <div class="w-full mt-20 lg:mt-24">
          <Picture class="w-full h-full">
            <Source
              media="(max-width: 767px)"
              src={props?.banner?.mobile ?? "https://placehold.co/375x189"}
              width={375}
              height={189}
            />
            <Source
              media="(min-width: 768px)"
              src={props?.banner?.desktop ?? "https://placehold.co/1109x559"}
              width={1109.03}
              height={559}
            />
            <Image
              class="w-full h-full object-cover"
              src={props?.banner?.mobile ?? "https://placehold.co/353x394"}
              alt="Background Demo"
              loading="eager"
              fetchPriority="high"
              width={353}
              height={394}
            />
          </Picture>
        </div>
      </div>
    </section>
  );
}

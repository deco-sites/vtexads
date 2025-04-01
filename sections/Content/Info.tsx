import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { clx } from "site/sdk/clx.ts";

/**
 * @title {{{title}}}
 */
export interface Text {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Texto
   */
  text?: TextArea;
}

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
   * @title Título
   */
  title?: string;
  /**
   * @title Descrição
   */
  description?: TextArea;
  /**
   * @title Parágrafos
   */
  texts?: Text[];
  /**
   * @title Imagem
   */
  banner?: Banner;
}

export default function Info(props: Props) {
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
          "w-full pt-16 pb-9 lg:pt-32 lg:pb-14 mx-auto max-w-[var(--max-width)]",
          "flex flex-col lg:flex-row gap-14 lg:gap-28",
          "px-4 lg:px-0",
        )}
      >
        <div class={clx("flex-1 flex flex-col")}>
          <h3
            class={clx(
              "font-normal text-display-medium text-left text-secondary",
            )}
          >
            {props.title}
          </h3>
          <h4
            class={clx(
              "font-normal text-body-large text-white text-pretty mt-8",
            )}
          >
            {props.description}
          </h4>
          <div class="flex flex-col gap-9" style={{ marginTop: "54px" }}>
            {props.texts?.map(({ title, text }) => (
              <div class="flex flex-col gap-4">
                <span
                  class={clx(
                    "font-normal text-headline-small text-left text-secondary text-pretty",
                  )}
                >
                  {title}
                </span>
                <p
                  class={clx(
                    "font-normal text-body-large text-white text-pretty",
                  )}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div class="flex-1">
          <Picture class="w-full h-full">
            <Source
              media="(max-width: 767px)"
              src={props?.banner?.mobile ?? "https://placehold.co/343x355"}
              width={343}
              height={355}
            />
            <Source
              media="(min-width: 768px)"
              src={props?.banner?.desktop ?? "https://placehold.co/608x615"}
              width={608}
              height={615}
            />
            <img
              class="w-full h-full object-cover rounded-xl"
              src={props?.banner?.mobile ?? "https://placehold.co/343x355"}
              width={343}
              height={355}
              alt={props?.banner?.alt}
              loading="lazy"
            />
          </Picture>
        </div>
      </div>
    </section>
  );
}

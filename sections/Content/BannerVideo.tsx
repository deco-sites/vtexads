import { useDevice, useScript, useSection } from "@deco/deco/hooks";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import { movePlayer } from "site/sdk/movePlayer.ts";
import { useId } from "site/sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";
import Video from "apps/website/components/Video.tsx";

export interface Image {
  /**
   * @title Imagem desktop
   */
  desktop?: ImageWidget;
  /**
   * @title Imagem mobile
   */
  mobile?: ImageWidget;
}

export interface Props {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Placeholder do vídeo
   */
  placeholderVideo?: Image;
  /**
   * @title Vídeo
   * @description Caso o vídeo tenha mais de 25 mb, use a segunda opção
   */
  video?: {
    desktop?: VideoWidget | string;
    mobile?: VideoWidget | string;
  };
  /**
   * @title Descrição
   */
  description?: string;
  /**
   * @ignore
   */
  variant?: "video";
}

export default function BannerVideo({
  title = "As maiores marcas do mundo já operam com a VTEX Ads.",
  ...props
}: Props) {
  const id = useId();
  const isMobile = useDevice() !== "desktop";

  if (props.variant === "video") {
    if (isMobile) {
      <Video
        controls
        src={props?.video?.mobile ?? ""}
        loop={false}
        playsInline={true}
        autoPlay={true}
        muted={false}
        loading="eager"
        width={353}
        height={394}
        class="w-full h-full"
      />;
    }

    return (
      <Video
        controls
        src={props?.video?.desktop ?? ""}
        loop={false}
        playsInline={true}
        autoPlay={true}
        muted={false}
        loading="eager"
        width={1232}
        height={724}
        class="w-full h-full"
      />
    );
  }

  return (
    <section
      class={clx(
        "w-full relative bg-info",
        // "relative before:absolute before:top-0 before:left-0 before:w-full before:h-1/4 before:z-0 before:bg-base-200",
      )}
      // style={{
      //   background: `linear-gradient(0deg, #142032, #142032),
      //   radial-gradient(45.1% 293.77% at 77.05% -0.07%, #152B47 0%, #152133 100%),
      //   linear-gradient(180deg, #F5F9FF -0.01%, #F5F9FF 16.26%, rgba(245, 249, 255, 0) 16.29%)`,
      // }}
    >
      <div
        style={{
          "--max-width": "1200px",
        }}
        class={clx(
          "w-full py-20 lg:py-24 px-5 lg:px-0 mx-auto max-w-[var(--max-width)]",
          "flex flex-col gap-10 lg:gap-16",
          "z-10",
        )}
      >
        <span
          style={{
            "--max-width": "614px",
          }}
          class={clx(
            "text-center text-balance lg:text-pretty text-neutral font-normal",
            "text-display-small lg:text-display-medium",
            "mx-auto max-w-[var(--max-width)]",
          )}
        >
          {title ?? ""}
        </span>
        <div class={clx("flex flex-col gap-6")}>
          <div
            style={{
              "--m-height": "247px",
              "--d-height": "687px",
              "border": "1px solid #D9D9D9",
            }}
            class={clx(
              "w-full flex rounded-3xl overflow-hidden  ",
              "min-h-[var(--m-height)] lg:min-h-[var(--d-height)]",
            )}
            id={`show-video-${id}`}
          >
            <div
              class={clx(
                "w-full flex rounded-3xl overflow-hidden relative",
              )}
            >
              <Picture
                aria-hidden="true"
                class="absolute top-0 left-0 w-full h-full"
              >
                <Source
                  media="(max-width: 767px)"
                  src={props?.placeholderVideo?.mobile ??
                    "https://placehold.co/335x247"}
                  width={335}
                  height={247}
                />
                <Source
                  media="(min-width: 768px)"
                  src={props?.placeholderVideo?.desktop ??
                    "https://placehold.co/1232x686"}
                  width={1232}
                  height={687}
                />
                <img
                  class="w-full h-full object-cover"
                  src={props?.placeholderVideo?.mobile}
                  alt="Background Demo"
                  loading="lazy"
                />
              </Picture>
              <div
                class="z-20 absolute top-0 left-0 w-full h-full [&>section]:w-full [&>section]:h-full"
                id={`content-video-BannerVideo`}
              >
              </div>
              <div
                id="player"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                class={clx(
                  "backdrop-blur-md absolute z-20",
                  "rounded-full",
                  "flex items-center justify-center",
                  "cursor-pointer",
                )}
                aria-label={"Abrir video"}
                hx-target={`#content-video-BannerVideo`}
                hx-trigger="click once"
                hx-swap="innerHTML transition:true"
                hx-get={useSection({ props: { variant: "video" } })}
              >
                <Icon
                  id="Player"
                  width={129}
                  height={129}
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
          <p class="text-title-medium text-black lg:text-title-large">
            {props.description}
          </p>
        </div>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(movePlayer, `#show-video-${id}`),
        }}
      />
    </section>
  );
}

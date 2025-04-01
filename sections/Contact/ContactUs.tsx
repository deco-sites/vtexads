import { ImageWidget, TextArea, VideoWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { clx } from "site/sdk/clx.ts";
import { markdownToHtml } from "site/sdk/markdown.ts";
import Icon from "site/components/ui/Icon.tsx";
import { useDevice, useScript, useSection } from "@deco/deco/hooks";
import { movePlayer } from "site/sdk/movePlayer.ts";
import Video from "apps/website/components/Video.tsx";

/**
 * @title Botão
 */
export interface Cta {
  label?: string;
  /**
   * @title Link
   */
  href?: string;
}

export interface Demo {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Texto superior
   */
  description?: TextArea;
  /**
   * @title Texto interior
   * @description Por padrão só aparece em desktop
   */
  textBottom?: TextArea;
  /**
   * @title Botão
   */
  cta?: Cta;
  /**
   * @title Background Cover
   */
  bg?: {
    desktop?: ImageWidget;
    mobile?: ImageWidget;
  };
  /**
   * @title Vídeo
   * @description Caso o vídeo tenha mais de 25 mb, use a segunda opção
   */
  video?: {
    desktop?: VideoWidget | string;
    mobile?: VideoWidget | string;
  };
}

export interface Form {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Name*
   */
  firstName?: string;
  /**
   * @title Sobrenome*
   */
  lastName?: string;
  /**
   * @title Empresa*
   */
  job?: string;
  /**
   * @title Demo para
   */
  demoSelect?: string[];
  /**
   * @title Email Corporativo*
   */
  email?: string;
  /**
   * @title Texto checkbox
   */
  checkboxText?: TextArea;
  /**
   * @title Termos de privacidade
   * @description Suporta conversão de links no formato [texto](url) e texto em negrito no formato ***texto***.
   */
  privacyTerms?: TextArea;
}

export interface Props {
  /**
   * @title Demo Teste
   */
  demo?: Demo;
  /**
   * @title Formulário placeholders
   */
  form?: Form;
  /**
   * @ignore
   */
  variant?: "demo-video";
}

function Form(props: Form) {
  return (
    <form
      style={{
        "--max-width": "768px",
      }}
      class={clx("flex flex-col w-full max-w-[var(--max-width)] mx-auto")}
    >
      <span
        class={clx(
          "font-normal text-display-small lg:text-display-large text-secondary text-center",
        )}
      >
        {props.title}
      </span>
      <div
        class={clx("mt-10 flex flex-col lg:grid lg:grid-cols-2 gap-6 w-full")}
      >
        <input
          name="firstName"
          type="text"
          placeholder={props.firstName}
          style={{ minHeight: "89px" }}
          class={clx(
            "backdrop-blur-md bg-white bg-opacity-10 rounded-[14px]",
            "px-7 border border-base-200 w-full  flex-1",
            "font-normal text-headline-medium text-base-200 placeholder-base-200",
          )}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder={props.lastName}
          style={{ minHeight: "89px" }}
          class={clx(
            "backdrop-blur-md bg-white bg-opacity-10 rounded-[14px]",
            "px-7 border border-base-200 w-full  flex-1",
            "font-normal text-headline-medium text-base-200 placeholder-base-200",
          )}
          required
        />
        <input
          name="job"
          type="text"
          placeholder={props.job}
          style={{ minHeight: "89px" }}
          class={clx(
            "backdrop-blur-md bg-white bg-opacity-10 rounded-[14px]",
            "px-7 border border-base-200 w-full  flex-1",
            "font-normal text-headline-medium text-base-200 placeholder-base-200",
          )}
          required
        />
        <input
          name="Demo para"
          placeholder={"Demo para"}
          style={{ minHeight: "89px" }}
          class={clx(
            "backdrop-blur-md bg-white bg-opacity-10 rounded-[14px]",
            "px-7 border border-base-200 w-full  flex-1",
            "font-normal text-headline-medium text-base-200 placeholder-base-200",
          )}
        />
        <input
          required
          name="email"
          type="email"
          placeholder={props.email}
          style={{ minHeight: "89px" }}
          class={clx(
            "backdrop-blur-md bg-white bg-opacity-10 rounded-[14px]",
            "px-7 border border-base-200 w-full  flex-1 col-span-1 lg:col-span-2",
            "font-normal text-headline-medium text-base-200 placeholder-base-200",
          )}
        />
      </div>
      <div
        class={clx("flex items-start mt-6 form-group")}
        style={{ gap: "10px" }}
      >
        <input
          id="authorization"
          type="checkbox"
          style={{
            width: "10px",
            height: "10px",
            borderTopLeftRadius: "2px",
            borderWidth: "1px",
            borderColor: "var(--secondary-color)",
          }}
          class="appearance-none cursor-pointer"
        />
        <label
          htmlFor="authorization"
          class={clx(
            "text-body-medium font-normal text-white text-left text-pretty cursor-pointer",
            "flex items-start",
          )}
          style={{ gap: "10px" }}
        >
          <div class="check relative w-fit"></div>
          {props.checkboxText}
        </label>
      </div>

      <p
        class={clx(
          "mt-6 text-body-medium font-normal text-white text-left text-balance",
          "[&>a]:underline",
        )}
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(props?.privacyTerms ?? ""),
        }}
      />

      <button
        class={clx(
          "py-4 px-6 lg:py-4 w-full mt-10 relative",
          "bg-accent uppercase text-white text-2xl font-medium",
          "hover:bg-accent-content transition-colors duration-300",
        )}
        style={{ borderRadius: "50px", letterSpacing: "-0.5px" }}
      >
        Enviar
        <Icon
          id="Submit"
          width={44}
          height={44}
          class={clx("absolute right-4 top-1/2 -translate-y-1/2")}
        />
      </button>
    </form>
  );
}

export default function ContactUs({ demo, variant, form }: Props) {
  const isMobile = useDevice() !== "desktop";

  if (variant === "demo-video") {
    if (isMobile) {
      <Video
        controls
        src={demo?.video?.mobile ?? ""}
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
        src={demo?.video?.desktop ?? ""}
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
        "w-full relative",
        "relative before:absolute before:top-0 before:left-0 before:w-full before:h-1/4 before:z-0 before:bg-base-200",
      )}
      style={{
        background: `linear-gradient(0deg, #142032, #142032), 
        radial-gradient(45.1% 293.77% at 77.05% -0.07%, #152B47 0%, #152133 100%), 
        linear-gradient(180deg, #F5F9FF -0.01%, #F5F9FF 16.26%, rgba(245, 249, 255, 0) 16.29%)`,
      }}
    >
      <div
        style={{
          "--max-width": "1200px",
        }}
        class={clx(
          "w-full pt-9 pb-24 px-4 lg:px-0 mx-auto max-w-[var(--max-width)]",
          "flex flex-col gap-24",
          "z-10",
        )}
      >
        <div
          style={{
            " background":
              "linear-gradient(109.26deg, #192638 1.44%, #FFFFFF 100.6%)",
            "padding": "2px",
          }}
          class={clx(
            "w-full flex rounded-3xl overflow-hidden",
          )}
          id="contact-demo"
          // hx-on:mouseenter={useScript(onMouseEnter)}
          // hx-on:mouseleave={useScript(onMouseLeave)}
        >
          <div
            class={clx(
              "w-full flex rounded-3xl overflow-hidden relative",
              "py-[62px] px-6 lg:py-20 lg:px-16",
            )}
          >
            <Picture
              aria-hidden="true"
              class="absolute top-0 left-0 w-full h-full"
            >
              <Source
                media="(max-width: 767px)"
                src={demo?.bg?.mobile ?? "https://placehold.co/353x394"}
                width={353}
                height={394}
              />
              <Source
                media="(min-width: 768px)"
                src={demo?.bg?.desktop ?? "https://placehold.co/1232x724"}
                width={1232}
                height={724}
              />
              <img
                class="w-full h-full object-cover"
                src={demo?.bg?.mobile}
                alt="Background Demo"
                loading="lazy"
              />
            </Picture>
            <div
              class={clx(
                "w-full flex flex-col",
                "gap-6 z-10",
              )}
            >
              <h4
                class={clx(
                  "font-normal text-display-medium lg:text-display-large text-secondary",
                  "text-pretty text-left pr-12",
                )}
                style={{ letterSpacing: "-3px" }}
              >
                {demo?.title}
              </h4>
              <p
                style={{
                  "--letter-spacing-m": "-2%",
                  "--letter-spacing-d": "-1px",
                  "--max-width": "465px",
                }}
                class={clx(
                  "font-normal text-headline-small lg:text-display-small",
                  "text-pretty text-left text-secondary",
                  "tracking-[var(--letter-spacing-m)] lg:tracking-[var(--letter-spacing-d)]",
                  "max-w-[var(--max-width)]",
                )}
              >
                {demo?.description}
              </p>
              <div
                style={{
                  "--max-width": "401px",
                }}
                class={clx(
                  "max-w-[var(--max-width)]",
                  "flex flex-col gap-8",
                  "mt-5 lg:mt-36",
                )}
              >
                <p
                  class={clx(
                    "font-normal text-body-large",
                    "text-pretty text-left text-secondary",
                    "hidden lg:block",
                  )}
                >
                  {demo?.textBottom}
                </p>
                <a
                  style={{
                    borderRadius: "21px",
                    letterSpacing: "-0.5px",
                    padding: "10px",
                    background: "#FAFCFF",
                    lineHeight: "14px",
                    "--max-width": "199px",
                  }}
                  class={clx(
                    "w-full flex justify-center items-center",
                    "uppercase text-neutral  text-label-large font-medium",
                    "lg:max-w-[var(--max-width)]",
                  )}
                  href={demo?.cta?.href ?? "#"}
                >
                  {demo?.cta?.label}
                </a>
              </div>
            </div>
            <div
              class="z-20 absolute top-0 left-0 w-full h-full [&>section]:w-full [&>section]:h-full"
              id="demo-video"
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
                // "top-1/2 left-1/2",
                "backdrop-blur-md absolute z-20",
                "rounded-full",
                "flex items-center justify-center",
                "cursor-pointer",
              )}
              aria-label={"Abrir video"}
              hx-target={"#demo-video"}
              hx-trigger="click once"
              hx-swap="innerHTML transition:true"
              hx-get={useSection({ props: { variant: "demo-video" } })}
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
        <Form {...form} />
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(movePlayer, "#contact-demo"),
        }}
      />
    </section>
  );
}

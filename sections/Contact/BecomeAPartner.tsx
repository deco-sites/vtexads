import { TextArea } from "apps/admin/widgets.ts";
import { clx } from "site/sdk/clx.ts";
import { markdownToHtml } from "site/sdk/markdown.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
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
   * @title Email Corporativo*
   */
  email?: string;
  /**
   * @title Telefone
   */
  cellphone?: string;
  /**
   * @title Qual parceria você busca?
   */
  partnership?: string;
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

export default function BecomeAPartner({ title, ...props }: Props) {
  return (
    <section
      class="w-full py-14 px-6 lg:px-0"
      style={{
        background: `linear-gradient(0deg, #142032, #142032), 
			radial-gradient(45.1% 293.77% at 77.05% -0.07%, #152B47 0%, #152133 100%), 
			linear-gradient(180deg, #F5F9FF -0.01%, #F5F9FF 16.26%, rgba(245, 249, 255, 0) 16.29%)`,
      }}
    >
      <form
        style={{
          "--max-width": "734px",
          "--padding-y": "48px",
        }}
        class={clx(
          "flex flex-col w-full max-w-[var(--max-width)] mx-auto bg-info rounded-3xl ",
          "px-6 lg:px-0 py-[var(--padding-y)]",
        )}
      >
        <span
          class={clx(
            "font-normal text-display-small lg:text-display-medium text-neutral text-center",
          )}
        >
          {title}
        </span>
        <div
          class={clx("mt-8 lg:mt-12 flex flex-col gap-6 w-full")}
        >
          <input
            name="firstName"
            type="text"
            placeholder={props.firstName}
            class={clx(
              "backdrop-blur-md bg-base-200 rounded-lg min-h-12",
              "px-3 lg:px-7 border border-[#DCDFE5] w-full  flex-1",
              "font-medium text-lg text-base-content placeholder-base-content",
            )}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder={props.lastName}
            class={clx(
              "backdrop-blur-md bg-base-200 rounded-lg min-h-12",
              "px-3 lg:px-7 border border-[#DCDFE5] w-full  flex-1",
              "font-medium text-lg text-base-content placeholder-base-content",
            )}
            required
          />
          <input
            required
            name="email"
            type="email"
            placeholder={props.email}
            class={clx(
              "backdrop-blur-md bg-base-200 rounded-lg min-h-12",
              "px-3 lg:px-7 border border-[#DCDFE5] w-full  flex-1",
              "font-medium text-lg text-base-content placeholder-base-content",
            )}
          />
          <input
            name="cellphone"
            type="tel"
            placeholder={props.cellphone}
            class={clx(
              "backdrop-blur-md bg-base-200 rounded-lg min-h-12",
              "px-3 lg:px-7 border border-[#DCDFE5] w-full  flex-1",
              "font-medium text-lg text-base-content placeholder-base-content",
            )}
          />
          <input
            name="partnership"
            placeholder={props.partnership}
            class={clx(
              "backdrop-blur-md bg-base-200 rounded-lg min-h-12",
              "px-3 lg:px-7 border border-[#DCDFE5] w-full  flex-1",
              "font-medium text-lg text-base-content placeholder-base-content",
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
              "text-body-medium font-normal text-base-content text-left text-pretty cursor-pointer",
              "flex items-start",
            )}
            style={{ gap: "10px" }}
          >
            <div
              class="check relative w-fit"
              style={{ "--color-default": "#787C89" }}
            >
            </div>
            {props.checkboxText}
          </label>
        </div>

        <p
          class={clx(
            "mt-6 text-body-medium font-normal text-base-content text-left text-balance",
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
    </section>
  );
}

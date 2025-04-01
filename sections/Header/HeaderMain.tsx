import { ImageWidget, TextArea } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";
import Icon from "site/components/ui/Icon.tsx";
import { clx } from "site/sdk/clx.ts";
import { markdownToHtml } from "site/sdk/markdown.ts";
import { Accordion } from "site/components/ui/Accordion.tsx";

/**
 * @title Botão
 */
export interface Cta {
  href: string;
  text: string;
}

/**
 * @title Link
 */
export interface Link {
  label: string;
  /**
   * @title Link
   */
  href?: string;
}

// /**
//  * @title ListItem {{{label}}}
//  */
// export interface ListItem extends Link {
//   /**
//    * @title Ícone
//    * @format icon-select
//    * @options site/loaders/availableIcons.ts
//    */
//   icon: AvailableIcons;
// }

/**
 * @title Headlink {{{label}}}
 */
export interface Headlink extends Link {
  links?: Link[];
}

// /**
//  * @title Listagem Simples com Ícone
//  */
// export interface ContentList {
//   /**
//    * @hide
//    */
//   type: "ContentList";
//   items: Link[];
// }

/**
 * @title Listagem com Headlinks
 */
export interface ContentListHeadLinks {
  /**
   * @hide
   */
  type: "ContentListHeadLinks";
  items: Headlink[];
}

/**
 * @title {{{alt}}}
 */
export interface Brand {
  /**
   * @title Título alternativo da Imagem
   */
  alt: string;
  /**
   * @title Imagem
   */
  image: ImageWidget;
  /**
   * @title Largura da Logo
   */
  width: number;
  /**
   * @title Altura da Logo
   */
  height: number;
  /**
   * @title Link
   */
  href?: string;
}

/**
 * @title Lista {{{label}}}
 */
export interface ListBrands {
  label?: string;
  brands?: Brand[];
}

/**
 * @title Listagem de Marcas
 */
export interface ContentListBrands {
  /**
   * @hide
   */
  type: "ContentListBrands";
  items: ListBrands[];
}

/**
 * @title {{{title}}}
 */
export interface InfoItem {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Conteúdo em texto
   * @description Para colocar links internos, pode seguir o exemplo [link do Google](https://www.google.com)
   */
  content?: TextArea;
}

/**
 * @title Listagem de Informações
 */
export interface ContentListInfo {
  /**
   * @hide
   */
  type: "ContentListInfo";
  items: InfoItem[];
}

/**
 * @title MiniBanner
 */
export interface ContentImage {
  /**
   * @hide
   */
  type: "ContentImage";
  label?: string;
  /**
   * @title Imagem
   */
  image?: ImageWidget;
  /**
   * @title Titulo Inferior
   */
  title?: string;
  /**
   * @title Descriçao
   */
  description?: string;
  /**
   * @title Link
   */
  href?: string;
}

/**
 * @title {{{titleContent}}}
 */
export interface Item {
  /**
   * @title Título do Conteúdo
   */
  titleContent?: string;
  content?:
    | ContentListHeadLinks
    | ContentListBrands
    | ContentListInfo
    | ContentImage;
}

/**
 * @title {{{title}}}
 */
export interface MenuItem {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Link
   */
  href?: string;
  /**
   * @title Conteúdo Interno
   */
  content?: Item[];
}

export interface Props {
  /**
   * @title Links do Menu
   */
  menu?: MenuItem[];
  /**
   * @title Botão de Ação
   */
  cta?: Cta;
}

export default function HeaderMain({ menu, cta }: Props) {
  const isMobile = useDevice() !== "desktop";

  return (
    <header
      class={clx(
        "max-w-screen-lg fixed top-0 lg:top-10 w-full z-50 lg:left-1/2 lg:-translate-x-1/2",
        "bg-secondary bg-opacity-70 backdrop-blur-sm shadow-box",
        "lg:rounded-2xl border border-base-200",
      )}
    >
      <div class="relative w-full lg:contents">
        <div class="w-full flex items-center justify-between px-6 py-5 lg:py-0 lg:px-6 lg:relative">
          <a title="Logo" href="/">
            <Icon id="Logo" width={189.08} height={32} class="text-accent" />
          </a>
          {!isMobile && (
            <>
              <nav>
                <ul class="flex items-center gap-9">
                  {menu?.map(({ content = [], href = "#", title }) => (
                    <li class="group/item py-6">
                      <div class="flex items-center" style={{ gap: "6px" }}>
                        <a
                          class="font-medium text-primary uppercase text-title-small"
                          href={href}
                        >
                          {title}
                        </a>
                        {!!content?.length && (
                          <Icon
                            id="ChevronDown"
                            width={8}
                            height={5}
                            class="text-primary"
                            strokeWidth={1}
                          />
                        )}
                      </div>
                      {!!content?.length && (
                        <div
                          class={clx(
                            "bottom-0 left-0 absolute w-full translate-y-full z-0 group-hover/item:z-50",
                            "opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto",
                            "transition-opacity duration-300",
                          )}
                        >
                          <div class="w-full pt-4">
                            <div
                              class={clx(
                                " w-full bg-white p-6 rounded-2xl",
                                " backdrop-blur-sm shadow-box",
                              )}
                            >
                              <div class="flex flex-wrap gap-6">
                                {content?.map((item) => (
                                  <WrapperContent {...item} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href={cta?.href ?? "#"}
                class={clx(
                  "bg-neutral px-6 py-3 uppercase text-white text-sm",
                  "hover:bg-base-content transition-colors duration-300",
                )}
                style={{ borderRadius: "50px" }}
              >
                {cta?.text}
              </a>
            </>
          )}
          {isMobile && (
            <div class="mobile-menu">
              <label for="mobile-drawer-nav" class="custom-modal-menu">
                <input
                  id="mobile-drawer-nav"
                  type="checkbox"
                  class="hidden"
                  aria-label="Abrir menu de navegação"
                />
                <Icon id="Bars3" width={24} height={24} class="text-neutral" />
              </label>
              <div
                class={clx(
                  "-z-10 opacity-0 pointer-events-none",
                  "transition-opacity duration-300",
                  "absolute -bottom-5 left-0 w-full translate-y-full",
                )}
                id="mobile-drawer-nav-content"
              >
                <div class="w-full h-full pt-1">
                  <MobileMenu menu={menu ?? []} cta={cta} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ menu, cta }: { menu: MenuItem[]; cta?: Cta }) {
  return (
    <div class="w-full h-full rounded-3xl bg-[#F8F7FCE5] bg-opacity-90 backdrop-blur-md px-6 py-8">
      <div class="w-full h-full flex flex-col gap-6">
        <div class="flex flex-col gap-[21px]">
          {menu?.map(({ href = "#", title, content }, index) => {
            const hasContent = !!content?.length;

            if (!hasContent) {
              return (
                <a href={href} class="text-tag-small font-medium">
                  {title}
                </a>
              );
            }

            return (
              <Accordion
                header={
                  <div class="flex justify-between items-center">
                    {href && (
                      <a href={href} class="text-tag-small font-medium">
                        {title}
                      </a>
                    )}
                    {!href && (
                      <span class="text-tag-small font-medium">{title}</span>
                    )}
                    <Icon
                      id="ChevronDown"
                      width={18}
                      height={18}
                      class="custom-accordion-indicator"
                    />
                  </div>
                }
                id={title ?? `menu-item-${index}`}
              >
                <div>Content</div>
              </Accordion>
            );
          })}
          <a
            href={cta?.href ?? "#"}
            class={clx(
              "bg-neutral px-6 py-4 uppercase text-white text-body-large w-full",
              "text-center",
            )}
            style={{ borderRadius: "50px" }}
          >
            {cta?.text}
          </a>
        </div>
      </div>
    </div>
  );
}

function WrapperContent({ content, titleContent }: Item) {
  if (content?.type === "ContentListHeadLinks") {
    const itemCount = content.items.length;
    const widthStyle = itemCount > 4
      ? { minWidth: "360px", flex: 1 }
      : { flex: 1 };

    return (
      <div class="flex flex-col gap-3" style={widthStyle}>
        <h2
          class={clx(
            "text-base font-medium text-neutral uppercase px-3 py-[10px]",
            "border-b border-[#DCDFE5]",
            "hidden lg:block",
          )}
        >
          {titleContent}
        </h2>
        <ContentListHeadLinks {...content} />
      </div>
    );
  }

  if (content?.type === "ContentImage") {
    return (
      <div class="flex flex-col gap-3">
        <h2
          class={clx(
            "text-base font-medium text-neutral uppercase px-3 py-[10px]",
            "border-b border-[#DCDFE5]",
            "hidden lg:block",
          )}
        >
          {titleContent}
        </h2>
        <ContentImage {...content} />
      </div>
    );
  }

  if (content?.type === "ContentListBrands") {
    return (
      <div class="flex flex-col gap-3 w-full">
        <h2
          class={clx(
            "text-base font-medium text-neutral uppercase px-3 py-[10px]",
            "border-b border-[#DCDFE5]",
            "hidden lg:block",
          )}
        >
          {titleContent}
        </h2>
        <ContentListBrands {...content} />
      </div>
    );
  }

  if (content?.type === "ContentListInfo") {
    return (
      <div class="flex flex-col gap-3 w-full">
        <h2
          class={clx(
            "text-base font-medium text-neutral uppercase px-3 py-[10px]",
            "border-b border-[#DCDFE5]",
            "hidden lg:block",
          )}
        >
          {titleContent}
        </h2>
        <ContentListInfo {...content} />
      </div>
    );
  }

  return null;
}

function ContentListHeadLinks({ items }: ContentListHeadLinks) {
  return (
    <div class="flex flex-col gap-[18px] px-3 flex-wrap max-h-80">
      {items.map(({ label, href, links = [] }) => (
        <div class="flex items-start flex-col gap-[5px]">
          <a
            href={href}
            class="text-label-large text-base-content uppercase font-medium max-w-40 text-balance"
          >
            {label}
          </a>
          <div class="flex flex-col gap-2 empty:hidden">
            {links.map(({ label, href }) => (
              <a href={href} class="text-body-small text-base-300">
                {label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContentImage({ image, title, description, href }: ContentImage) {
  return (
    <a href={href} class="flex flex-col gap-4">
      <Image
        src={image ?? "https://placehold.co/333x240"}
        alt={title}
        width={333}
        height={240}
        class="object-cover rounded-2xl"
      />
      <div class="flex flex-col gap-1 px-[10px]">
        <h3 class="text-title-small text-neutral uppercase">{title}</h3>
        <p class="text-title-small text-base-300">{description}</p>
      </div>
    </a>
  );
}

function ContentListBrands({ items }: ContentListBrands) {
  return (
    <div class="flex flex-col gap-3 w-full">
      {items.map(({ label, brands = [] }) => (
        <div class="flex flex-col gap-2 p-4 border border-[#DCDFE5] rounded-md w-full">
          <h2 class="text-tag-medium font-medium text-primary uppercase">
            {label}
          </h2>
          <div
            style={{
              height: "68px",
            }}
            class="w-full overflow-hidden rounded-lg flex items-center group"
          >
            <div class="marquee w-full">
              <ul
                style={{ "--gap": "42px" }}
                class="marquee__content animate-sliding group-hover:pause"
              >
                {brands?.map(
                  ({
                    alt = "Brand",
                    image = "https://placehold.co/160x28",
                    width,
                    height,
                  }) => (
                    <li class="flex items-center gap-3">
                      <Image
                        src={image}
                        alt={alt}
                        width={width ?? 160}
                        height={height ?? 27}
                        class="object-contain"
                        loading="lazy"
                      />
                    </li>
                  ),
                )}
              </ul>
              <ul
                aria-hidden="true"
                style={{ "--gap": "42px" }}
                class="marquee__content animate-sliding group-hover:pause"
              >
                {brands?.map(
                  ({
                    alt = "Brand",
                    image = "https://placehold.co/160x28",
                    width,
                    height,
                  }) => (
                    <li class="flex items-center gap-3">
                      <Image
                        src={image}
                        alt={alt}
                        width={width ?? 160}
                        height={height ?? 27}
                        class="object-contain"
                        loading="lazy"
                      />
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContentListInfo({ items }: ContentListInfo) {
  return (
    <div class="flex flex-col w-full">
      {items.map(({ title, content }) => (
        <div class="flex flex-col gap-[6px] px-3 pt-[26px] pb-2">
          <h3 class="text-title-small text-neutral uppercase font-medium">
            {title}
          </h3>
          <p
            class={clx(
              "text-body-small text-base-content font-normal",
              "[&>a]:underline",
            )}
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(content ?? ""),
            }}
          />
        </div>
      ))}
    </div>
  );
}

import { asset, Head } from "$fresh/runtime.ts";
import { AppContext } from "site/apps/site.ts";
import { Context } from "@deco/deco";
export const stylesSrc = async () =>
  asset(`/styles.css?revision=${await Context.active().release?.revision()}`);

export const loader = async (_: null, _req: Request, ctx: AppContext) => {
  const fonts = [
    {
      src: asset("/fonts/VTEXTrust-Medium.woff2"),
      type: "font/woff2",
      weight: "500",
    },
    {
      src: asset("/fonts/VTEXTrust-Regular.woff2"),
      type: "font/woff2",
      weight: "400",
    },
  ];
  const styleSrc = await stylesSrc();
  ctx.response.headers.append("link", `<${styleSrc}>; rel=preload; as="style"`);
  fonts.forEach((font) => {
    ctx.response.headers.append(
      "link",
      `<${font.src}>; rel="preload"; as="font"; type="${font.type}"`,
    );
  });
  return { fonts };
};

export default function Fonts(props: Awaited<ReturnType<typeof loader>>) {
  return (
    <Head>
      <style>
        {`
          @font-face {
            font-family: VTEX Trust;
            src: url(${props.fonts[0].src}) format(woff2);
            font-display: swap;
            font-weight: ${props.fonts[0].weight}
          }
          @font-face {
            font-family: VTEX Trust;
            src: url(${props.fonts[1].src}) format(woff2);
            font-display: swap;
            font-weight: ${props.fonts[1].weight}
          }
          `}
      </style>
    </Head>
  );
}

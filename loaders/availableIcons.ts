import { allowCorsFor, FnContext } from "@deco/deco";
import { AvailableIcons } from "../static/adminIcons.ts";

const icons = Object.keys(AvailableIcons).map((iconName) => ({
  component: AvailableIcons[iconName as keyof typeof AvailableIcons],
  label: iconName,
}));

// Loader para mapear todos os ícones disponíveis que serão usados nos widgets IconSelect.
export default function IconsLoader(
  _props: unknown,
  req: Request,
  ctx: FnContext,
) {
  // Permitir Cors
  Object.entries(allowCorsFor(req)).map(([name, value]) => {
    ctx.response.headers.set(name, value);
  });

  // Mapeamento de ícones para { value, label, icon }
  const iconsMap = icons.map((icon) => ({
    icon: icon.component,
    label: icon.label,
    value: icon.label,
  }));

  return iconsMap;
}

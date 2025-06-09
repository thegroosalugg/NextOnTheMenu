import { IconType } from "../icon/icon.model";
import Svg from "../icon/Svg";

export default function MenuButton({ icon }: { icon: IconType }) {
  return (
    <button
      className="
        flex
        items-center
        bg-stone-100 dark:bg-stone-700
        border border-accent rounded-sm
        p-1
      "
    >
      <Svg {...{ icon, size: 20 }} />
    </button>
  );
}

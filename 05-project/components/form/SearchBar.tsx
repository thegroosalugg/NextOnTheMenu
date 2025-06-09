import Svg from "../ui/icon/Svg";

export default function SearchBar() {
  return (
    <form
      className="
        relative
        [&>svg]:absolute
        [&>svg]:top-1.5
        [&>svg]:right-1
        [&>svg]:fill-neutral-500
        [&>svg]:hover:stroke-neutral-500
      "
    >
      <input
        className="
          border
          pl-2 py-1 pr-5
          rounded-lg
          text-sm
          bg-white
          placeholder:text-neutral-500
        "
        placeholder="Search..."
      />
      <Svg icon="Search" />
    </form>
  );
}

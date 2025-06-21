import Svg from "../ui/icon/Svg";

export default function SearchBar() {
  return (
    <form action="/shop" className=" w-full mx-auto relative">
      <input
        name="q"
        className="
          border rounded-lg
          w-full pl-2 py-1 pr-5
          text-sm bg-white
          placeholder:text-neutral-500
        "
        placeholder="Search..."
      />
      <button
        className="
          absolute top-1.5 right-1
          [&>svg]:fill-neutral-500
          [&>svg]:hover:stroke-neutral-500
        "
      >
        <Svg icon="Search" />
      </button>
    </form>
  );
}

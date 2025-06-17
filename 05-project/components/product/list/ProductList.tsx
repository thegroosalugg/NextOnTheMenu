import Product from "@/model/product";
import Grid, { ListConfig } from "@/components/ui/list/Grid";
import ImageTile from "@/components/ui/image/ImageTile";
import FloatingTag from "@/components/ui/label/FloatingTag";

interface ListProps extends ListConfig {
  products: Product[];
}

export default function ProductList({ products, hero, scroll, animate }: ListProps) {
  return (
    <Grid<Product> {...{ hero, scroll, animate, items: products }}>
      {({ _id, name, price, images }, i) => (
        <ImageTile
              href={`/product/${_id}`}
               src={`/shop/${images[0].src}`}
               alt={name}
              hero={hero && i === 0}
          priority={i < 7}
        >
          <FloatingTag>
            <span className="line-clamp-2">{name}</span>
            <span className="bg-sky-700 text-white py-0.5 px-1 md:py-1 md:px-2 rounded-3xl">
              ${price}
              {hero && <span className="hidden md:inline"> USD</span>}
            </span>
          </FloatingTag>
        </ImageTile>
      )}
    </Grid>
  );
}

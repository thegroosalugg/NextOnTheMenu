import ImageBoxed from "@/components/image/ImageBoxed";
import "@/lib/mongo/initdb"; // create dummy data if non existent
import Product from "@/model/product";

export default async function Home() {
  const products = await Product.getAll();
  return (
    <div>
      <ul>
        {products.map(({ _id, name, price, desc, category, images }) => (
          <li key={_id.toString()}>
            <h2>{name}</h2>
            <ImageBoxed src={'/shop' + images[0].src} alt={name} maxWidth={240} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import Product from "@/model/product";

export default function ProductDescription({ name, price, desc, images }: Product) {
  return (
    <div>
      <h2>{name}</h2>
      <span>{price}</span>
      <ul>
        {images.map(({ color }) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <p>{desc}</p>
    </div>
  );
}

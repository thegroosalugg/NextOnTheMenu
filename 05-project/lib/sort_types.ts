enum SortPath {
     Latest = "latest",
       Name = "name",
  PriceDesc = "price",
   PriceAsc = "-price",
}

export const SortTypes = [
  { _id: "1", path: SortPath.Latest,    name: "New Arrivals", isDefault: true },
  { _id: "2", path: SortPath.Name,      name: "Alphabetical"                  },
  { _id: "3", path: SortPath.PriceDesc, name: "Price: High to low"            },
  { _id: "4", path: SortPath.PriceAsc,  name: "Price: Low to high"            },
];

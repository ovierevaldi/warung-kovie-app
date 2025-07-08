import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { ProductProp } from "@/types/product.type";

async function fetchProducts() {
  const res = await fetch(`${process.env.API_HOST}/product`, {
    cache: 'no-store'
  });

  return res.json();
}

export default async function Home() {
  const products: ProductProp[] = await fetchProducts();

  const getProducts = () => {
    return(
      products.map(p => <ProductCard key={p.id} product={p}/>)
    )
  }

  return (
    <div>
      <SearchBar />
      <br />
      <br />
      <div className="grid grid-cols-2 max-h-[1000px] gap-10 overflow-auto mx-auto max-w-[1600px] p-3">
        {
          getProducts()
        }
      </div>
    </div>
  );
}

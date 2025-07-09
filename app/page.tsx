'use client'

import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { ProductProp } from "@/types/product.type";
import { useEffect, useState } from "react";

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product`, {
    cache: 'no-store'
  });

  return res.json();
}

export default function Home() {
  const [products, setProducts] = useState<ProductProp[]>([]);
  const [currentSeachVal, setCurrentSearchVal] = useState('');

  useEffect(() => {
    fetchProducts()
    .then((val) => {
      setProducts(val)
    })
    .catch((err) => console.log(err))
  }, [currentSeachVal]);

  return (
    <div>
      <SearchBar 
        onValueChanged={(val) => setCurrentSearchVal(val)}
      />
      <br />
      <br />
      <div className="grid grid-cols-2 max-h-[1000px] gap-10 overflow-auto mx-auto max-w-[1600px] p-3">
        {
          products.map(p => <ProductCard key={p.id} product={p}/>)
        }
      </div>
    </div>
  );
}

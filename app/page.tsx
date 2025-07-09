'use client'

import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { ProductProp } from "@/types/product.type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";

async function fetchProducts(keyword: string = '') {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product?search=${keyword}`, {
    cache: 'no-store'
  });

  return res.json();
}

export default function Home() {
  const [products, setProducts] = useState<ProductProp[]>([]);
  const [currentSeachVal, setCurrentSearchVal] = useState('');
  const [debounceSearch] = useDebounce(currentSeachVal, 500)
 
  useEffect(() => {
    fetchProducts(debounceSearch)
    .then((val) => {
      setProducts(val)
    })
    .catch((err) => {
      if(err instanceof Error)
        toast.error(err.message)
      else
        toast.error('Cannot Fetch Product')
    });

  }, [debounceSearch]);

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

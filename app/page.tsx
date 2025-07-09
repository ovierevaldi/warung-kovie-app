'use client'

import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { useProduct } from "@/context/ProductContext";
import { useUserOrder } from "@/context/UserOrderContext";
import { ProductProp } from "@/types/product.type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";

export default function Home() {
  const { updateListOrder } = useUserOrder();
const { products, fetchProducts} = useProduct();
  
  const [currentSeachVal, setCurrentSearchVal] = useState('');
  const [debounceSearch] = useDebounce(currentSeachVal, 500);
 
  useEffect(() => {
    fetchProducts(debounceSearch)
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
          products.map(p => 
            <ProductCard 
              key={p.id} 
              product={p}
              onProductSelected={(id) => updateListOrder({ id: id, amount: 1})}
            />
          )
        }
      </div>
    </div>
  );
}

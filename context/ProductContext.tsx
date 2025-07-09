'use client'

import { ProductProp } from "@/types/product.type";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type ProductContextProps = {
  fetchProducts: (keyword?: string) => Promise<void>;
  products: ProductProp[]
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductContextProvider = (props: PropsWithChildren) => {

  const [products, setProducts] = useState<ProductProp[]>([]);
  
  async function fetchProducts(keyword: string = '') {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product?search=${keyword}`, {
        cache: 'no-store'
      });

      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data: ProductProp[] = await res.json();

      setProducts(data)

    } catch (err) {
      if(err instanceof Error)
        toast.error(err.message)
      else
        toast.error('Cannot Fetch Product')
    }
  };

  return(
    <ProductContext.Provider
      value={{ fetchProducts, products}}
    >
      {props.children}
    </ProductContext.Provider>
  )
};

export const useProduct = () => {
  const context = useContext(ProductContext);

  if(!context){
    throw new Error('useProduct must be used within a UseProductProvider')
  }

  return context;
}


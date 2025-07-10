'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type ListOrderProp = {
  id: number
  amount: number
}

type UserOrderContextProp = {
  listOrder: ListOrderProp[],
  addListOrder: (order: ListOrderProp) => void,
  deleteListOrder: (id: number) => void,
  clearOrder: () => void
}

const UserOrderContext = createContext<UserOrderContextProp | undefined>(undefined);

export const UserOrderProvider = ({ children } : { children: ReactNode}) => {
  const [listOrder, setListOrder] = useState<ListOrderProp[]>([])

  function addListOrder(order: ListOrderProp): void {
    const exsistingOrder = listOrder.find(o => o.id === order.id);

    if(exsistingOrder){
      setListOrder((prev) => prev.map(exo => exo.id === order.id ? {...exo, amount: exo.amount + order.amount } : exo))
    }
    else{
      setListOrder((prev) => [...prev, order])
    };
  };

  function deleteListOrder(id: number): void{
    setListOrder(listOrder.filter((o) => o.id !== id))
  };

  function clearOrder(){
    setListOrder([])
  }

  return (
    <UserOrderContext.Provider
      value={{ listOrder, addListOrder, deleteListOrder, clearOrder}}
    >
      { children }
    </UserOrderContext.Provider>
  )
};

export const useUserOrder = () => {
  const context = useContext(UserOrderContext);

  if(!context){
    throw new Error('useUserOrder must be used within a UserOrderProvider')
  };

  return context;
}
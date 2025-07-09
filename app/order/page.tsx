'use client'

import BigButton from '@/components/BigButton'
import ConfirmDeleteModal from '@/components/Order/ConfirmDeleteModal'
import DeleteOrderButton from '@/components/Order/DeleteOrderButton'
import NamaPemesanInput from '@/components/Order/NamaPemesanInput'
import OrderAmount from '@/components/Order/OrderAmount'
import { useModal } from '@/context/ModalContext'
import { useProduct } from '@/context/ProductContext'
import { useUserOrder } from '@/context/UserOrderContext'
import React from 'react'

const page = () => {
  const { listOrder, addListOrder, deleteListOrder } = useUserOrder();
  const { products } = useProduct();
  const { setModalContent } = useModal();

  function getOrderName(id: number){
    return products.find(p => p.id === id)?.name
  };

  function getOrderPrice(id: number, amount: number) {
    const price = products.find(p => p.id === id)?.price || 0;
    const totalHarga = price * amount;
    return totalHarga;
  };

  function getTotalHarga(){
    return listOrder.reduce((sum, o) => sum + getOrderPrice(o.id, o.amount), 0)
  };

  function updateOrder(id: number, type: '+' | '-'){
    switch (type) {
      case '+':
        addListOrder({ id: id, amount: 1 })
        break;
      case '-':
        addListOrder( { id: id, amount: -1})
      default:
        break;
    }
  };

  function deleteOrder(id: number){
    deleteListOrder(id);
  }

  const renderListOrder = () => {
    return (
      listOrder.map((o) => 
        (
          <div 
            key={o.id}
            className='grid grid-cols-[40px_1fr_1fr_1fr] items-center gap-y-3 text-center mb-6'
          >
            <DeleteOrderButton 
              onBtnClicked={() => {
                setModalContent(
                   <ConfirmDeleteModal 
                    onBtnClicked={() => {deleteOrder(o.id)}}
                   />
                );
              }}
            />
            <p className='text-2xl text-primary'>{getOrderName(o.id)}</p>
            <OrderAmount 
              position='center' 
              amount={o.amount}
              onMinusBtnClicked={() => updateOrder(o.id, '-')}
              onPlusBtnClicked={() => updateOrder(o.id, '+')}
            />
            <p className='text-2xl text-primary'>{getOrderPrice(o.id, o.amount)}</p>
          </div>
        )
      )
    )
  }

  return (
    <div className='space-y-12 min-h-[600px]'>
      <p className='text-3xl text-center text-primary'>List Order</p>
      
      <div>
        {renderListOrder()}
        <hr />
      </div>

      <div className='grid grid-cols-3 items-center gap-y-3 text-center'>
        <p></p>
        <p className='text-2xl text-primary font-bold'>Total</p>
        <p className='text-2xl text-primary font-bold'>{getTotalHarga()}</p>
      </div>
      
      <NamaPemesanInput />

      <div className='text-center'>
        <BigButton text='Bayar'/>
      </div>
    </div>
  )
}

export default page
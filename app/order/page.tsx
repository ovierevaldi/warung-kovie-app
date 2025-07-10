'use client'

import BigButton from '@/components/BigButton'
import ConfirmDeleteModal from '@/components/Order/ConfirmDeleteModal'
import DeleteOrderButton from '@/components/Order/DeleteOrderButton'
import NamaPemesanInput from '@/components/Order/NamaPemesanInput'
import OrderAmount from '@/components/Order/OrderAmount'
import { useModal } from '@/context/ModalContext'
import { useProduct } from '@/context/ProductContext'
import { useUserOrder } from '@/context/UserOrderContext'
import React, { useState } from 'react'
import noOrderImage from '@/public/images/still-6cbc3b0755837126c89cbc23df300cff.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { formatOrderPrice } from '@/helpers/textFormatter'
import { DetailPesananInputProps, OrderInputProps } from '@/types/order.type'
import toast from 'react-hot-toast'

const page = () => {
  const { listOrder, addListOrder, deleteListOrder } = useUserOrder();
  const { products } = useProduct();
  const { setModalContent } = useModal();

  const router = useRouter();

  const [namaPemesan, setNamaPemesan] = useState('');

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
            <p className='text-2xl text-primary'>{formatOrderPrice(getOrderPrice(o.id, o.amount))}</p>
          </div>
        )
      )
    )
  };

  function checkDisabledOrderButton(){
    return listOrder.length <= 0 || namaPemesan === '';
  };

  async function insertOrderApi(){
    const listPemesanan: DetailPesananInputProps[] = listOrder.map((o) => 
      (
        {
          nama_pesanan: getOrderName(o.id) ?? '',
          harga: getOrderPrice(o.id, 1),
          amount: o.amount
        }
      )
    )

    const payload: OrderInputProps = {
      nama_pemesan: namaPemesan,
      detail_pesanan: listPemesanan,
      total_harga: getTotalHarga()
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if(!res.ok){
        const error = await res.json();
        throw new Error(error.message || 'Failed to insert order');
    };

    toast.success('Success Creating Order');
    router.push('/redirect')
  }

  return (
      listOrder.length ? 
      <div className='space-y-12 min-h-[600px]'>
        <p className='text-3xl text-center text-primary'>List Order</p>
        
        <div>
          {renderListOrder()}
          <hr />
        </div>

        <div className='grid grid-cols-[40px_1fr_1fr_1fr] items-center gap-y-3 text-center'>
          <p></p>
          <p></p>
          <p className='text-2xl text-primary font-bold'>Total</p>
          <p className='text-2xl text-primary font-bold'>{formatOrderPrice(getTotalHarga())}</p>
        </div>
        
        <NamaPemesanInput 
          onValueChanged={(val) => {setNamaPemesan(val)}}
        />

        <div className='text-center'>
          <BigButton 
            text='Pesan'
            onBtnClicked={() => insertOrderApi()}
            isDisabled={checkDisabledOrderButton()}
          />
        </div>

      </div>
      :
      <div className='flex items-center flex-col gap-y-6'>
        <p className='text-2xl'>Oops You Haven’t Order Anything Yet</p>
        <Image 
          alt='No Order Image'
          src={noOrderImage}
          width={150}
        />
        <p className='text-xl'>You Can Order your coffee here</p>
        <button 
          className='bg-primary text-white w-64 py-4 rounded-lg'
          onClick={() => router.push('/')}
        >
          <p className='text-2xl'>
            Menu
          </p>
        </button>
      </div>
  )
}

export default page
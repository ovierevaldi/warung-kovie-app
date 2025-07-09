'use client'

import React, { useState } from 'react'
import OrderAmountButton from './OrderAmountButton';
import { formatTextOrderAmount } from '@/helpers/textFormatter';

type Position = 'start' | 'center' | 'end';

interface OrderAmountProps {
  position?: Position;
  amount: number
}

const OrderAmount = ({ position = 'center', amount }: OrderAmountProps) => {
  const [currentAmount, setCurrentAmount] = useState(0);

  function operateAmount(type: '+' | '-') {
    switch (type) {
      case '+':
        if (currentAmount < 99) setCurrentAmount((prev) => prev + 1);
        break;
      case '-':
        if (currentAmount > 0) setCurrentAmount((prev) => prev - 1);
        break;
      default:
        break;
    }
  }

  // Map position to Tailwind justify classes
  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }[position];

  return (
    <div className={`flex gap-x-3 text-xl items-center ${justifyClass}`}>
      <OrderAmountButton
        type='-'
        onBtnClicked={() => operateAmount('-')}
      />
      <p className='text-primary text-2xl'>
        {formatTextOrderAmount(amount)}
      </p>
      <OrderAmountButton
        type='+'
        onBtnClicked={() => operateAmount('+')}
      />
    </div>
  );
};

export default OrderAmount;

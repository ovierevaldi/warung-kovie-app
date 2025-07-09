'use client'

import React, { useState } from 'react'
import OrderAmountButton from './OrderAmountButton';
import { formatTextOrderAmount } from '@/helpers/textFormatter';
import { useUserOrder } from '@/context/UserOrderContext';

type Position = 'start' | 'center' | 'end';

interface OrderAmountProps {
  position?: Position;
  amount: number;
  onMinusBtnClicked: () => void;
  onPlusBtnClicked: () => void;
}

const MAX_ITEM = 10
const MIN_ITEM = 1

const OrderAmount = ({ position = 'center', amount, onMinusBtnClicked, onPlusBtnClicked }: OrderAmountProps) => {

  function onButtonClicked(type: '+' | '-'){
    switch (type) {
      case '+':
        if (amount < MAX_ITEM) 
          onPlusBtnClicked();
        break;
      case '-':
        if (amount > MIN_ITEM) 
          onMinusBtnClicked();
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
        onBtnClicked={() => onButtonClicked('-')}
      />
      <p className='text-primary text-2xl'>
        {formatTextOrderAmount(amount)}
      </p>
      <OrderAmountButton
        type='+'
        onBtnClicked={() => onButtonClicked('+')}
      />
    </div>
  );
};

export default OrderAmount;

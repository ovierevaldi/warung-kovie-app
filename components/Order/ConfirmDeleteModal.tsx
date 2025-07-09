'use client'

import { useModal } from '@/context/ModalContext';
import React from 'react';

type ConfirmDeleteModalProps = {
  onBtnClicked: () => void
}

const ConfirmDeleteModal = ( { onBtnClicked }: ConfirmDeleteModalProps) => {
  const { setModalContent } = useModal()

  return (
    <div className='bg-white w-xl p-4 rounded-xl'>
      <p className="text-lg">Are you sure you want to delete?</p>
      <div className="flex justify-end gap-3 mt-4">
        <button 
          onClick={() => setModalContent(null)}
        >
          Cancel
        </button>
        <button className="text-red-500" 
          onClick={() => {
           setModalContent(null);
           onBtnClicked();
          }}>
            Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;

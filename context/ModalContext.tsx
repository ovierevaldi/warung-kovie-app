'use client'

import { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";

type ModalContextProps = {
  setModalContent: (content: ReactNode) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  return(
    <ModalContext.Provider
      value={{ setModalContent }}
    >
      {children}
      {
        modalContent && (
          <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            { modalContent }
          </div>
        )
      }
    </ModalContext.Provider>
  )
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if(!context){
    throw new Error('useModal must be used within a ModalProvider')
  };

  return context;
}
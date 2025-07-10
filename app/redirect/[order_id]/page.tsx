'use client'

import BackButton from '@/components/Redirect/BackButton';
import CircleNumber from '@/components/Redirect/CircleNumber';
import React, { useEffect, useState, use } from 'react';
import toast from 'react-hot-toast';

type InfoAntrianProps = {
  namaPemesan: string;
  nomorAntrian: number;
};

const Page = ({ params }: { params: Promise<{ order_id: string }> }) => {
  const { order_id } = use (params);
  const [infoAntrian, setInfoAntrian] = useState<InfoAntrianProps | null>(null);

  async function getInfoAntrian() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/order/info-antrian/${order_id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      toast.error('Failed To Get Info Antrian');
      return;
    }

    const data = await res.json();
    
    setInfoAntrian({
      namaPemesan: data.nama_pelanggan,
      nomorAntrian: data.nomor_antrian
    });
  }

  useEffect(() => {
    getInfoAntrian();
  }, [order_id]);

  return (
    <div>
      {order_id}
      <p className='text-center text-primary text-3xl mb-4'>Order Confirmed</p>
      <p className='text-center text-2xl mb-4'>Pesanan Anda Telah dikonfirmasi oleh kasir kami</p>

      <div className='flex flex-col items-center gap-y-8'>
        <p className='text-center text-2xl'>
          <span className='text-primary'>{infoAntrian?.namaPemesan || '...'}</span>, nomor antrian
        </p>

        <CircleNumber text={infoAntrian?.nomorAntrian?.toString() || '0'} />

        <BackButton />
      </div>
    </div>
  );
};

export default Page;
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './components/logo/Logo';
import MenuBar from './components/menuBar/MenuBar';
import { YellowLine } from './components/yellowLine/YellowLine';

export default function Home() {
  const [delayNextText, SetDelayNextText] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      SetDelayNextText(true);
      const redirectTimer = setTimeout(() => {
        router.push('orderMenu');
      }, 3000);

      return () => clearTimeout(redirectTimer);
    }, 3000);

    return () => clearTimeout(messageTimer); // Limpia el temporizador del mensaje
  }, [router]);

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <MenuBar />
      <YellowLine />
      <div className='flex flex-1 flex-col justify-center items-center'>
        <div className='flex justify-center items-center rounded-full overflow-hidden w-42 h-42 mb-4'>
          <Logo className='w-full h-full object-cover' width={200} height={200} />
        </div>
        <h1 className='text-4xl font-bold text-gray-800 text-center mb-4'>
          Bienvenido a Casa Nogal
        </h1>
        <hr className='h-px my-4 bg-gray-200 border-2 w-full max-w-md' />
        <h2 className='text-3xl font-semibold text-gray-700 text-center mb-4'>
          Ingrese tarjeta RFID
        </h2>
        {delayNextText && (
          <div className='flex justify-center items-center mt-2'>
            <div className='animate-pulse flex justify-center items-center h-100 w-100 rounded-full bg-gray-200 ml-4 text-2xl'>
              Acceso garantizado ingresando al sistema
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
'use client'
import dynamic from 'next/dynamic';

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./components/map"), {
    ssr: false
  });

  return (
    <main className=' h-screen'>
      <div className='h-[10%]'>
        
      </div>
    <div className=' h-[70%] '> 
      <MapWithNoSSR />
    </div>
    </main>


  );
}
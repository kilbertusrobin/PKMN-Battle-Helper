import Link from 'next/link';

export default function Home() {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center gap-40 items-center">
      <div className="w-1/4  h-1/3 flex flex-col justify-center items-center">
        <img src="./logo.webp" alt="logo" className="w-full " />
        <h1 className="text-5xl">Battle Helper</h1>
      </div>
      <Link href="/fight" className='w-60 h-20 flex justify-around pl-6 py-4 items-center rounded-full bg-red-600'>
        <p>Nouveau combat</p>
        <img src='./battle.png' alt="battle" className='h-full' />
      </Link>
    </div>
  );
}

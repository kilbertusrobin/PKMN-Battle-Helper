import Link from 'next/link';

export default function Home() {
  return (
    <div className="border w-screen h-screen flex justify-center items-center">
      <div className="w-1/4 border h-1/3 flex flex-col justify-center items-center">
        <img src="./logo.webp" alt="logo" className="w-full border" />
        <h1 className="text-5xl">Battle Helper</h1>
      </div>
      <Link href="/next-page">
        <p>Nouveau combat</p>
      </Link>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-red-300 h-screen w-full flex items-center justify-center">
      <div className="h-60 w-96 bg-gray-300 flex justify-between items-start text-[10px] rounded-xl border border-black ">
        <div className="flex">
          <p className="font-bold">name: </p>
          <p>temujin</p>
          <p>fjdslk</p>
        </div>
        <Image src="/zurag.avif" height={200} width={200} className="rounded" />
      </div>
    </div>
  );
}

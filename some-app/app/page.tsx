import Image from "next/image";
import { NavigationBar } from "./index.js";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-center">
            Next.js + React Tutorial
          </h1>
          <p className="text-lg">
            NavigationBarが画面上部に表示されていれば成功です！
          </p>
        </main>
      </div>
    </div>
  );
}

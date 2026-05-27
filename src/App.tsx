import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Hello React & Tailwind!</h1>
      <div className="flex flex-row items-center gap-6">
        <button
          className="bg-sky-300 px-3 py-2 rounded hover:bg-sky-400"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="bg-indigo-500  row-span-3 ">01</div>
        <div className="bg-indigo-500  col-span-2 ">02</div>
        <div className="bg-indigo-500  col-span-2 row-span-2 ">03</div>
      </div>
      <div className="z-30 absolute bottom-10 left-10 border-4 bg-indigo-500 bg-clip-border p-3">
        テスト太郎
      </div>
      <div className="z-20 absolute bottom-0 left-0 border-4 bg-indigo-500 bg-clip-border p-3">
        テスト太郎
      </div>
    </main>
  );
}

export default App;

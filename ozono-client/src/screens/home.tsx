import React from "react";
import useUserStore from "../store/userStore";

function Home() {
  const userStore = useUserStore();
  console.log(userStore);
  return (
    <div className="bg-white">
      <h1 className="text-3xl font-bold underline">hola</h1>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-black dark:text-black dark:hover:text-black-300 dark:hover:border-gray-300 transition-all">
        Button
      </button>
    </div>
  );
}

export default Home;

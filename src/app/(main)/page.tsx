"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
    const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 w-full relative flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-gray-100 opacity-10 pointer-events-none"></div>
      <div className="z-10 text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <div>Welcome to</div>
          <div className="scroll-m-20 md:text-6xl text-4xl font-extrabold tracking-tight lg:text-7xl text-foreground">
            BreakYour<span className="text-blue-500">LLM</span>
          </div>
        </div>

        <button onClick={() => router.push('dashboard/llm-results')} className="cursor-pointer group inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold rounded-lg py-2 px-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-300 hover:border-blue-500 transform hover:translate-y-1 hover:rotate-1">
          View Dashboard
        </button>
      </div>
      <div className="absolute bottom-0 w-full text-center py-2 bg-gray-200 text-gray-600 text-xs">
        © 2025 BreakYourLLM. All rights reserved.
      </div>
    </div>
  );
}

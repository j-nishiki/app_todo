"use client";
import React from 'react';
import Component1 from "./Component1";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-300 flex justify-center">
      <div className="bg-orange-200 w-1/2 p-10">
        <p className="text-16 font-bold">Todo app</p>
        <Component1 />
      </div>
    </main>
  );
}

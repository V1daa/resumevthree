"use client";

import { animatePageIn } from "@/utils/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-800 z-10 fixed top-0 left-0 w-1/12"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-gray-800 z-10 fixed top-0 left-[8.3%] w-1/12"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-zinc-800 z-10 fixed top-0 left-[16.6%] w-1/12"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-stone-800 z-10 fixed top-0 left-[24.9%] w-1/12"
      />
      <div
        id="banner-5"
        className="min-h-screen bg-red-800 z-10 fixed top-0 left-[33.23%] w-1/12"
      />
      <div
        id="banner-6"
        className="min-h-screen bg-orange-800 z-10 fixed top-0 left-[41.5%] w-1/12"
      />
      <div
        id="banner-7"
        className="min-h-screen bg-amber-800 z-10 fixed top-0 left-[49.8%] w-1/12"
      />
      <div
        id="banner-8"
        className="min-h-screen bg-yellow-800 z-10 fixed top-0 left-[58.1%] w-1/12"
      />
      <div
        id="banner-9"
        className="min-h-screen bg-lime-800 z-10 fixed top-0 left-[66.4%] w-1/12"
      />
      <div
        id="banner-10"
        className="min-h-screen bg-green-800 z-10 fixed top-0 left-[74.7%] w-1/12"
      />
      <div
        id="banner-11"
        className="min-h-screen bg-emerald-800 z-10 fixed top-0 left-[83%] w-1/12"
      />
      <div
        id="banner-12"
        className="min-h-screen bg-teal-800 z-10 fixed top-0 left-[91.3%] w-1/12"
      />
      <div
        id="banner-13"
        className="min-h-screen bg-neutral-800 z-10 fixed top-0 left-[99.6%] w-1/12"
      />
      {children}
    </div>
  );
}

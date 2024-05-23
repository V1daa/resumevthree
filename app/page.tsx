"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = ['1.avif', '2.avif', '3.avif', '4.avif']


export default function Home() {
  const [dark, setDark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //@ts-ignore
        setImage(images[Math.floor(Math.random() * images.length)]);
    }, 8000)
    
    return () => clearInterval(intervalId);
}, [])

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 500) {
      setPage(1);
    } else if (position > 1000) {
      setPage(2);
    } else {
      setPage(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={`${dark ? "dark" : ""}`}>
      <div className="dark:bg-black dark:text-white">
        <section className="main-grid items-center">
        <button
          className="fixed top-0 w-14 h-14 bg-black text-white rounded-[50%] dark:bg-white dark:text-black m-4 hover:rounded-md transition-all duration-200"
          onClick={() => setDark(!dark)}
        >
          DARK
        </button>
          <div
            className={`w-full h-full flex items-center flex-col justify-center transition-all ${
              isHovered ? "opacity-0" : ""
            }`}
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="w-full bg-cover h-[25%] flex items-center justify-center img"
            >
              <Image
                className="mr-[20vw] absolute pt-[10vh] dark:invert"
                src={`graphic.svg`}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="pt-10 flex flex-row gap-[30vw] w-full ml-10">
              <div className="flex flex-col gap-2">
              <h1 className="uppercase">Dmytro Volianskyi</h1>
              <h1 className="text-gray-400">Full-Stack Developer & UI|UX Designer</h1>
              </div>
              <h1 className=" max-w-64 text-sm uppercase pt-16">Every project is a challenge to do better i have ever done</h1>
            </div>
          </div>
          <div className="h-[100vh] bg-gray-200 w-[1px]"></div>
          <div className="flex flex-col gap-10 ml-20">
            <Link
              href={""}
              className="menu"
              data-text="Home"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`home ${isHovered ? "opacity-10" : ""}`}>
                Home
              </div>
            </Link>
            <Link
              href={""}
              className="menu"
              data-text="About"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`home ${isHovered ? "opacity-10" : ""}`}>
                About
              </div>
            </Link>
            <Link
              href={""}
              className="menu"
              data-text="Project"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`home ${isHovered ? "opacity-10" : ""}`}>
                Project
              </div>
            </Link>
          </div>
        </section>
        <div className="fixed bottom-10 w-full flex flex-row items-baseline justify-center">
          <div className="flex justify-start w-full ml-20 gap-20 text-sm">
          <h3>Social:</h3>
          <h3>/TELEGRAM</h3>
          <h3>/GITHUB</h3>
          <h3>/LEETCODE</h3>
          </div>
          <ul className="flex flex-row gap-5 w-full mr-20 ">
            <li
              className={`${page === 0 ? "active" : ""} square dark:invert`}
            ></li>
            <li
              className={`${page === 1 ? "active" : ""} square dark:invert`}
            ></li>
            <li
              className={`${page === 2 ? "active" : ""} square dark:invert`}
            ></li>
          </ul>
        </div>
        <section className=" bg-white text-black dark:bg-black dark:text-white">
          Section 2
        </section>
      </div>
    </main>
  );
}

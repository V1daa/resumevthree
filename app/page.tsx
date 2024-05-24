"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = ["1.avif", "2.avif", "3.avif", "4.avif"];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(0);
  const [image, setImage] = useState("1.avif");

  useEffect(() => {
    const intervalId = setInterval(() => {
      //@ts-ignore
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 500 && position < 1000) {
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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".main", {
      scrollTrigger: {
        trigger: ".main",
        toggleActions: "restart none none reverse",
      },
      y: "90%",
    });
    gsap.to(".l", {
      scrollTrigger: {
        trigger: ".sec",
        toggleActions: "restart reverse restart reverse",
      },
      x: "-800%",
      duration: 0.1,
      ease: 'bounce'
    });
  }, []);

  return (
    <main className={`${dark ? "dark" : ""}`}>
      <div className="dark:bg-black dark:text-white">
        <section className="main-grid items-center" id="main">
          <button
            className="z-50 fixed top-0 w-14 h-14 bg-black text-white rounded-[50%] dark:bg-white dark:text-black m-4 hover:rounded-md transition-all duration-200"
            onClick={() => setDark(!dark)}
            id="image"
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
                className="mr-[20vw] absolute pt-[10vh] dark:invert max-lg:hidden"
                src={`graphic.svg`}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="pt-10 flex flex-row gap-[30vw] w-full ml-10 max-xl:gap-[20vw]">
              <div className="flex flex-col gap-2">
                <h1 className="uppercase">Dmytro Volianskyi</h1>
                <h1 className="text-gray-400">
                  Full-Stack Developer & UI|UX Designer
                </h1>
              </div>
              <h1 className="text max-w-64 text-sm uppercase pt-16 text max-md:hidden">
                Every project is a challenge to do better i have ever done
              </h1>
            </div>
          </div>
          <div className="h-[100vh] bg-gray-200 w-[1px]"></div>
          <div className="flex flex-col gap-10 ml-20 fixed right-36 max-xl:hidden">
            <Link
              href="#main"
              scroll={true}
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
              href="#about"
              scroll={true}
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
          <div className="fixed bottom-10 w-full flex flex-row items-baseline justify-center">
            <div className="flex justify-start w-full ml-20 gap-20 text-sm max-xl:gap-10 max-sm:gap-2">
              <h3 className="l">Social:</h3>
              <Link href="https://t.me/v1daaaa" target="_blank" className="l">
                <h3>/TELEGRAM</h3>
              </Link>
              <Link
                href="https://github.com/V1daa"
                target="_blank"
                className="l"
              >
                <h3>/GITHUB</h3>
              </Link>
              <Link
                href="https://leetcode.com/u/ViDa-la-ViDA/"
                target="_blank"
                className="l"
              >
                <h3>/LEETCODE</h3>
              </Link>
            </div>
            <ul className="flex flex-row gap-5 w-full mr-20 max-xl:hidden ">
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
        </section>
        <section
          className={`bg-white text-black dark:bg-black dark:text-white flex justify-center items-center gap-52 sec`}
          id="about"
        >
          <div
            className={` bg-gray-200 h-full w-auto flex justify-center flex-col gap-5 p-10 align-baseline max-sm:p-1 main ${
              isHovered ? "opacity-0" : ""
            }`}
          >
            <h1 className="text-4xl dark:text-black">DATA</h1>
            <div className="flex flex-col gap-4 text-end w-[250px] dark:text-black">
              <h2>
                <span className="data">Location: &nbsp;</span> Poznań, Poland
              </h2>
              <h2>
                <span className="data">Born: &nbsp;</span>
                27.08.2002
              </h2>
              <h2>
                <span className="data">Citizenship: &nbsp;</span>
                Ukraine
              </h2>
              <h2>
                <span className="data">Languages: &nbsp;</span>
                English, Polish, Ukrainian
              </h2>
            </div>
          </div>
          <div
            className={`bg-black text-white h-full w-[250px] flex justify-center flex-col gap-5 pl-10 align-baseline main ${
              isHovered ? "opacity-0" : ""
            }`}
          >
            <h1 className="text-4xl dark:text-white ">STACK</h1>
            <div className="flex flex-row flex-wrap gap-7 items-center max-sm:gap-1">
              <Image src={"/ts.png"} alt="" width={40} height={40} />
              <Image src={"/mongodb.png"} alt="" width={20} height={20} />
              <Image src={"/java.png"} alt="" width={50} height={50} />
              <Image src={"/node-js.png"} alt="" width={40} height={40} />
              <Image src={"/figma.png"} alt="" width={20} height={20} />
              <Image src={"/blender.png"} alt="" width={40} height={40} />
              <Image src={"/next.png"} alt="" width={38} height={35} />
              <Image src={"/prisma.webp"} alt="" width={35} height={35} />
              <Image src={"/mysql.png"} alt="" width={40} height={40} />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <div
            className={`flex items-center justify-center flex-col gap-10 ${
              isHovered ? "opacity-0" : ""
            }`}
          >
            <h1 className="text-5xl font-bold">BOARDY</h1>
            <div className="flex items-center justify-center gap-10">
              <Link href="https://board-eight-blush.vercel.app/">
                <Image
                  src={"/board3.jpg"}
                  className="hover:scale-125 transition-all"
                  alt=""
                  width={700}
                  height={700}
                />
              </Link>
              <Link href="https://board-eight-blush.vercel.app/">
                <Image
                  src={"/board2.jpg"}
                  className="hover:scale-125 transition-all"
                  alt=""
                  width={700}
                  height={700}
                />
              </Link>
            </div>
            <h2 className="max-w-[30vw] text-center max-lg:max-w-[60vw] max-sm:max-w-[90vw]">
              Miro clone fullstack infinite whiteboard app with multicursor.
              Created by using Liveblocks, NextJs and Zustand state manager. UI
              was created with help of ShadcnUi. Authorization with help of
              Clerk. And for database was chosen Convex free and realtime
              database.{" "}
            </h2>
            <h2 className="text-gray-300 uppercase text-center max-w-[30vw] max-lg:max-w-[60vw] max-sm:max-w-[90vw]">
              For more projects visit my{" "}
              <Link href="https://github.com/V1daa">GITHUB</Link>
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}

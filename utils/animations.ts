import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const bannerFive = document.getElementById("banner-5");
  const bannerSix = document.getElementById("banner-6");
  const bannerSev = document.getElementById("banner-7");
  const bannerEgh = document.getElementById("banner-8");
  const bannerNin = document.getElementById("banner-9");
  const bannerTen = document.getElementById("banner-10");
  const bannerEl = document.getElementById("banner-11");
  const bannerTw = document.getElementById("banner-12");
  const bannerTh = document.getElementById("banner-13");

  if (
    bannerOne &&
    bannerTwo &&
    bannerThree &&
    bannerFour &&
    bannerFive &&
    bannerSix &&
    bannerSev &&
    bannerEgh &&
    bannerNin &&
    bannerTen &&
    bannerEl &&
    bannerTw &&
    bannerTh
  ) {
    const tl = gsap.timeline();

    tl.set(
      [
        bannerOne,
        bannerTwo,
        bannerThree,
        bannerFour,
        bannerFive,
        bannerSix,
        bannerSev,
        bannerEgh,
        bannerNin,
        bannerTen,
        bannerEl,
        bannerTw,
        bannerTh,
      ],
      {
        yPercent: 0,
      }
    ).to(
      [
        bannerOne,
        bannerTwo,
        bannerThree,
        bannerFour,
        bannerFive,
        bannerSix,
        bannerSev,
        bannerEgh,
        bannerNin,
        bannerTen,
        bannerEl,
        bannerTw,
        bannerTh,
      ],
      {
        yPercent: 100,
        stagger: 0.1,
      }
    );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

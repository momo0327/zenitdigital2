"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Websites & product",
    image: "/images/v2/blackPhone.png",
    tags: ["Web Design", "Product"],
  },
  {
    title: "Brand & identity",
    image: "/images/v2/redMac.png",
    tags: ["Brand", "Identity"],
  },
  {
    title: "Custom software",
    image: "/images/v2/ipad.png",
    tags: ["Custom", "Software"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            setActive(Number((en.target as HTMLElement).dataset.i));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    cardsRef.current.forEach((c) => c && io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="bg-[#FFFFFF] px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[80rem] grid-cols-1 items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-16 2xl:max-w-[100rem]">
        <div className="md:sticky md:top-[calc(50vh-190px)]">
          <h2 className="font-v2-statement text-3xl font-medium tracking-tight text-black sm:text-4xl">
            Three crafts, one team, <br /> zero hand-offs.
          </h2>
          <p className="font-poppins mt-5 max-w-[36ch] text-base leading-relaxed text-black/55">
            Strategy, design and engineering under one roof — so nothing gets
            lost between the idea and the launch.
          </p>
          <ul className="mt-9 list-none">
            {services.map((s, i) => (
              <li
                key={s.title}
                className={`font-poppins flex items-center gap-4 border-b border-black/10 py-3.5 text-[clamp(22px,2.4vw,30px)] tracking-[-0.02em] transition-colors duration-300 ${
                  i === active ? "text-black" : "text-black/25"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 flex-none rounded-full transition-transform duration-300 ${
                    i === active
                      ? "scale-125 bg-orange-500"
                      : "bg-black/15"
                  }`}
                />
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10 md:pl-10">
          {services.map((s, i) => (
            <figure
              key={s.title}
              data-i={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="relative flex min-h-[60vw] flex-col items-center justify-center overflow-hidden bg-[#F5F5F7] md:min-h-[74vh]"
            >
              {s.image && (
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

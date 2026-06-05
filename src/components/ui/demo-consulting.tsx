"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-12 pt-8">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Unleash strategic clarity with <br />
              <span className="text-5xl md:text-[6rem] font-bold mt-2 leading-none text-[#2c3e2d]">
                First-Principles Consulting
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2420&auto=format&fit=crop"
          alt="Business strategy dashboard"
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

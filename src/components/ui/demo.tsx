'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[550px] bg-black/[0.96] relative overflow-hidden border border-neutral-905">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* 3D Spline Scene Background - Offset to the right to avoid overlapping with text */}
      <div className="absolute inset-y-0 right-0 left-0 md:left-[35%] lg:left-[45%] z-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>

      {/* High-contrast content overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12 max-w-xl bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 uppercase tracking-wide leading-none">
          TIF <br />
          <span className="text-[#10b981]">Automations</span>
        </h2>
        <p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed font-medium">
          We engineer context-aware AI co-pilots, custom OCR summaries, and integration pipelines to eliminate repetitive operational friction.
        </p>
      </div>
    </Card>
  )
}

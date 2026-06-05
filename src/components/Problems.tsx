
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Problems = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  const problems = [
    {
      problem: "Inefficiency steals your time.",
      solution: "We architect intelligent systems that give you back 20+ hours per week.",
    },
    {
      problem: "Invisibility kills your brand.",
      solution: "We build positioning and demand generation that makes you impossible to ignore.",
    },
    {
      problem: "Indecision stalls your momentum.",
      solution: "We provide clarity and actionable roadmaps that accelerate your growth trajectory.",
    }
  ];

  const handleCardInteraction = (index: number) => {
    // On mobile, toggle the card. On desktop, use hover.
    if (window.innerWidth <= 768) {
      setFlippedCard(flippedCard === index ? null : index);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Problems We Solve</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Every growing company faces these challenges. We've mastered the solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((item, index) => (
            <Card 
              key={index}
              className="group h-48 md:h-64 cursor-pointer perspective-1000"
              onClick={() => handleCardInteraction(index)}
              onMouseEnter={() => window.innerWidth > 768 && setFlippedCard(index)}
              onMouseLeave={() => window.innerWidth > 768 && setFlippedCard(null)}
            >
              <div className="relative h-full preserve-3d transition-transform duration-700" 
                   style={{ transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                
                {/* Front Card */}
                <CardContent className="absolute inset-0 h-full bg-gradient-to-br from-stone-50 to-stone-100 p-6 md:p-8 flex items-center justify-center backface-hidden rounded-lg border border-stone-200">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 text-center leading-tight">
                    {item.problem}
                  </h3>
                </CardContent>
                
                {/* Back Card */}
                <CardContent className="absolute inset-0 h-full bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b] p-6 md:p-8 flex items-center justify-center backface-hidden rounded-lg"
                           style={{ transform: 'rotateY(180deg)' }}>
                  <p className="text-sm md:text-lg text-white text-center leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Mobile instruction */}
        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-gray-500">Tap the cards to see solutions</p>
        </div>
      </div>
    </section>
  );
};

export default Problems;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "The Insight Foundry transformed our entire go-to-market strategy. Their AI automation reduced our manual processes by 80% while improving our conversion rates by 150%. Game-changing work.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, GrowthHacker Co",
      company: "GrowthHacker Co",
      content: "Working with The Insight Foundry was like having a strategic partner who actually understood our business. They didn't just implement solutions. They architected our entire growth engine.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Emily Watson",
      title: "VP of Operations, ScaleUp Inc",
      company: "ScaleUp Inc",
      content: "The clarity and systems they built allowed us to scale from $1M to $5M ARR in 18 months. Their approach to automation and strategy is unlike anything we've experienced.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what founders and operators say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group md:hover:shadow-2xl transition-all duration-500 md:hover:scale-105 border-none bg-white md:hover:bg-gradient-to-br md:hover:from-white md:hover:to-stone-50"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-4 md:mb-6">
                  <Quote className="w-6 md:w-8 h-6 md:h-8 text-[#2c3e2d] mb-3 md:mb-4 opacity-60" />
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b] rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-white font-bold text-sm md:text-base">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {testimonial.title}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
            Ready to join our success stories?
          </p>
          <button 
            className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg mobile-touch-button"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

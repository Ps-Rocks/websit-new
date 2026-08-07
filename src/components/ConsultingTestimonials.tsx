import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Linkedin } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  founderName: string;
  designation?: string;
  companyName: string;
  portraitUrl?: string;
  logoUrl?: string;
  linkedinUrl?: string;
}

interface ConsultingTestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 'shubham-bortex',
    quote: "Amazing job done with the consultation. The analysis you gave me actually helped me understand my competitor market much better. Doing a competitor analysis in a deep-tech sector, especially for defence, is quite tough, and I definitely benefited from this. Apart from that, this also served as a word of confidence—a valuable second opinion. Kudos to that!",
    founderName: "Shubham Datta",
    designation: "Founder",
    companyName: "BORTEX",
    portraitUrl: "/lovable-uploads/shubham-portrait-bortex.jpg",
    logoUrl: "/lovable-uploads/bortex-logo.png",
    linkedinUrl: "https://www.linkedin.com/in/shubham-mechanical/"
  },
  {
    id: 'prateek-riskhub',
    quote: "Their work was exceptionally well-structured, data-driven and actionable. They took the time to understand our vision and priorities, then delivered a roadmap that helped us think differently about positioning, growth and execution.",
    founderName: "Prateek Yadav",
    designation: "Founder & CEO",
    companyName: "RiskHub",
    portraitUrl: "/lovable-uploads/prateek-portrait-riskhub.png",
    logoUrl: "/lovable-uploads/riskhub-logo.png"
    ,linkedinUrl: "https://www.linkedin.com/in/prateek964/"
  },
  {
    id: 'mayank-ziptier',
    quote: "The ICP industry comparison was the most useful part. It validated the direction we were already leaning and gave us external data-backed confidence. The market overview, competitor landscape and LinkedIn-based suggestions were also valuable starting points.",
    founderName: "Mayank Vijay",
    designation: "Co-Founder",
    companyName: "ZipTier",
    logoUrl: "/lovable-uploads/ziptier-logo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/vijaymayank736/"
  },
  {
    id: 'kavya-brand-cameo',
    quote: "The process was smooth, collaborative, and easy to work through. Prathmesh truly understood our venture and designed sample concepts that aligned with our vision, which added a lot of value.",
    founderName: "Kavya",
    designation: "Founder",
    companyName: "Brand Cameo Works Pvt. Ltd.",
    portraitUrl: "/lovable-uploads/kavya-brand-cameo.jpg",
    logoUrl: "/lovable-uploads/brand-cameo-logo.jpg"
  }
];

export default function ConsultingTestimonials({ testimonials = defaultTestimonials }: ConsultingTestimonialsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const renderPortrait = (testimonial: Testimonial) => {
    if (testimonial.portraitUrl) {
      return (
        <img 
          src={testimonial.portraitUrl}
          alt={testimonial.founderName}
          className="w-full h-full object-cover"
        />
      );
    }
    // Fallback: circular avatar with initials
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b] flex items-center justify-center">
        <span className="text-white font-bold text-xl">
          {testimonial.founderName.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-bold tracking-widest text-[#2c3e2d] uppercase mb-4">
            Social Proof
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
            Trusted by Founders
          </h3>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Real feedback from founders we've worked with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-none shadow-md bg-white overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer group"
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardContent className="p-6 md:p-8 h-full flex flex-col space-y-6">
                {/* Quote Icon */}
                <Quote className="w-8 md:w-10 h-8 md:h-10 text-[#2c3e2d] opacity-40" />

                {/* Testimonial Quote */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base italic flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

                {/* Founder Info Section */}
                <div className="space-y-4">
                  {/* Portrait and Company Logo Row */}
                  <div className="flex items-center gap-4">
                    {/* Circular Portrait */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-stone-200 group-hover:border-[#2c3e2d] transition-colors duration-300">
                        {renderPortrait(testimonial)}
                      </div>
                      {/* Company Logo Badge */}
                      {testimonial.logoUrl && (
                        <div className={`absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full overflow-hidden shadow-md flex items-center justify-center ${testimonial.id === 'shubham-bortex' ? 'bg-black' : 'bg-stone-100'}`}>
                          <img 
                            src={testimonial.logoUrl}
                            alt={testimonial.companyName}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                      )}
                    </div>

                    {/* Name and Company Info */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                          {testimonial.founderName}
                        </h4>
                        {testimonial.linkedinUrl && (
                          <a
                            href={testimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
                            aria-label={`${testimonial.founderName} on LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      {testimonial.designation && (
                        <p className="text-xs md:text-sm text-gray-600">
                          {testimonial.designation}
                        </p>
                      )}
                      <p className="text-xs md:text-sm font-medium text-[#2c3e2d] group-hover:text-[#1a2b1b] transition-colors duration-300">
                        {testimonial.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import ConsultingTestimonials from '@/components/ConsultingTestimonials';

const testimonialVideos = [
  {
    company: 'BORTEX',
    logo: '/lovable-uploads/bortex-logo.png',
    title: 'Founder video testimonial',
    description:
      'Hear from BORTEX on how our market and GTM work helped them understand competitor positioning and move forward with confidence.',
    src: 'https://www.youtube.com/embed/r7hMKI2otX4',
  },
  {
    company: 'Brand Cameo',
    logo: '/lovable-uploads/brand-cameo-logo.jpg',
    title: 'Founder video testimonial',
    description:
      'A short story from Brand Cameo on how our GTM strategy was collaborative, practical, and aligned to their long-term vision.',
    src: 'https://www.youtube.com/embed/v1Pms3sBXtI',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-neutral-900 selection:bg-[#2c3e2d]/10 selection:text-[#2c3e2d]">
      <div className="pt-8 md:pt-12">
        <ConsultingTestimonials />
      </div>

      <section className="border-t border-stone-200/60 bg-stone-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#2c3e2d]">
              Video Testimonials
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
              See the impact in our clients’ own words
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8">
            {testimonialVideos.map((video) => (
              <div
                key={video.company}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={video.src}
                    title={`${video.company} Video Testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-stone-100 ring-1 ring-stone-200">
                      <img
                        src={video.logo}
                        alt={`${video.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                        {video.company}
                      </p>
                      <p className="text-lg font-semibold text-neutral-900">{video.title}</p>
                    </div>
                  </div>

                  <p className="leading-relaxed text-neutral-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '../components/Footer';

const posts = [
  {
    title: 'How Startups Are Shaking Up Industries With Daring Ideas',
    summary: 'Why startups gain an edge through speed, scrappiness, and insight in a world shaped by AI and rapid change.',
    slug: '/blog/startups',
    tag: 'Startups',
  },
];

const BlogIndex = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div
            className="cursor-pointer text-xl font-black tracking-wider text-[#2c3e2d] md:text-2xl"
            onClick={() => navigate('/')}
          >
            The Insight Foundry
          </div>
          <Button
            variant="ghost"
            className="text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
            onClick={() => navigate('/')}
          >
            Back Home
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2c3e2d]/10 bg-[#2c3e2d]/5 px-3 py-1 text-sm font-semibold text-[#2c3e2d]">
            <BookOpen className="h-4 w-4" />
            Blogs
          </div>
          <h1 className="text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
            Choose a blog to read
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">
            We’re building this space as a simple home for our latest thinking, practical insights, and startup-focused perspectives.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/40 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#2c3e2d]/10 bg-[#2c3e2d]/5 px-3 py-1 text-sm font-semibold text-[#2c3e2d]">
                  {post.tag}
                </span>
                <span className="text-sm text-neutral-500">Featured article</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-neutral-950">{post.title}</h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-600">{post.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white"
                  onClick={() => navigate(post.slug)}
                >
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-stone-300 text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
                  onClick={() => navigate('/about')}
                >
                  Learn about us
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;

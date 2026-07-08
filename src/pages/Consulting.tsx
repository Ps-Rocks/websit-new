import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Youtube, ArrowRight, Target, Lightbulb, Zap, Clock, ShieldCheck, Users, TrendingUp, Presentation, Search, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HeroScrollDemo } from '@/components/ui/demo-consulting';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import Footer from '../components/Footer';
import Lenis from 'lenis';

export default function Consulting() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const strategySteps = [
    {
      number: "01",
      title: "Diagnose",
      icon: Search,
      description: "We audit your organizational workflows, team bottlenecks, and tool architectures.",
      details: [
        "First-principles process mapping",
        "Cost-center and labor inefficiency audits",
        "Tool sprawl and architecture reviews",
        "Operational scaling model simulations"
      ],
      example: "Identified a scaling bottleneck where communication overhead ate up 30% of key executive cycles."
    },
    {
      number: "02",
      title: "Architect",
      icon: GitBranch,
      description: "We design a comprehensive organizational and technological blueprint.",
      details: [
        "Custom tech stack selection and mapping",
        "Operations restructuring blueprints",
        "ROI modeling and milestone planning",
        "Information flow designs"
      ],
      example: "Architected a decentralized workflow model reducing daily sync times by 70%."
    },
    {
      number: "03",
      title: "Align & Implement",
      icon: Users,
      description: "We support change-management, team alignment, and tool configurations.",
      details: [
        "Change-management coaching and alignment",
        "Executive dashboards and OKR setup",
        "Process playbook documentation",
        "Standard operating procedure alignment"
      ],
      example: "Aligned operations across 3 business units, boosting productivity metrics within 30 days."
    }
  ];

  const consultingImages = [
    {
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1280&h=720&fit=crop&q=80',
      alt: 'Strategy meeting and workflow planning',
      title: "Strategic Clarity",
      description: "We map workflows to unlock your organization's potential."
    },
    {
      src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1280&h=720&fit=crop&q=80',
      alt: 'Executive briefing and first-principles brainstorming',
      title: "Operational Audit",
      description: "Identifying workflow bottlenecks and team friction points."
    },
    {
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=800&fit=crop&q=80',
      alt: 'Team structural alignment workshop',
      title: "System Architecting",
      description: "Designing tool specifications and information pathways."
    },
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&fit=crop&q=80',
      alt: 'Financial metrics and scaling blueprint',
      title: "Scale Blueprints",
      description: "Custom operational roadmaps engineered for growth."
    },
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&q=80',
      alt: 'Structured enterprise building',
      title: "Division Alignment",
      description: "Unifying SOPs and dashboards across departments."
    },
    {
      src: '/operational-bottlenecks.jpg',
      alt: 'Analyzing operational bottlenecks',
      title: "Playbook Design",
      description: "Frictionless operational structures for modern teams."
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop&q=80',
      alt: 'Post-consulting operational review session',
      title: "Compound Scale",
      description: "Expanding organizational throughput without linear hiring."
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans selection:bg-[#2c3e2d]/10 selection:text-[#2c3e2d]">
      
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            
            <div 
              className="text-xl md:text-2xl font-black tracking-wider text-neutral-900 cursor-pointer"
              onClick={() => navigate('/')}
            >
              TIF <span className="font-light text-[#2c3e2d]">CONSULTING</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button 
                variant="ghost"
                className="text-[#2c3e2d] hover:bg-[#2c3e2d]/10 font-semibold"
                onClick={() => navigate('/automation')}
              >
                TIF Automations
              </Button>
              <Button 
                variant="ghost"
                className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
                onClick={() => navigate('/about')}
              >
                About Us
              </Button>
              <Button 
                variant="ghost"
                className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
                onClick={() => navigate('/blog')}
              >
                Blogs
              </Button>
              <Button 
                variant="ghost"
                className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
                onClick={() => navigate('/careers')}
              >
                Careers
              </Button>
              <div className="flex items-center gap-3 border-l border-stone-300 pl-4">
                <a 
                  href="https://www.linkedin.com/company/the-insight-foundry-official" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[#2c3e2d] transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/the_insight_foundry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[#2c3e2d] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="http://www.youtube.com/@TheInsightFoundry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[#2c3e2d] transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              
              <Button 
                className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white font-semibold rounded-lg shadow-sm"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Book Strategy Call
              </Button>
            </nav>

            <button
              className="md:hidden p-2 text-neutral-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-stone-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="ghost"
                  className="justify-start text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
                  onClick={() => {
                    navigate('/automation');
                    setMobileMenuOpen(false);
                  }}
                >
                  TIF Automations
                </Button>
                <Button 
                  variant="ghost"
                  className="justify-start text-gray-700 hover:bg-[#2c3e2d]/10"
                  onClick={() => {
                    navigate('/about');
                    setMobileMenuOpen(false);
                  }}
                >
                  About Us
                </Button>
                <Button 
                  variant="ghost"
                  className="justify-start text-gray-700 hover:bg-[#2c3e2d]/10"
                  onClick={() => {
                    navigate('/blog');
                    setMobileMenuOpen(false);
                  }}
                >
                  Blogs
                </Button>
                <Button 
                  variant="ghost"
                  className="justify-start text-gray-700 hover:bg-[#2c3e2d]/10"
                  onClick={() => {
                    navigate('/careers');
                    setMobileMenuOpen(false);
                  }}
                >
                  Careers
                </Button>
                <div className="flex items-center gap-4 px-3 py-2">
                  <span className="text-sm text-gray-500">Follow:</span>
                  <a 
                    href="https://www.linkedin.com/company/the-insight-foundry-official" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-[#2c3e2d] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/the_insight_foundry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-[#2c3e2d] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="http://www.youtube.com/@TheInsightFoundry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-[#2c3e2d] transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
                
                <Button 
                  className="mx-3 bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white"
                  onClick={() => {
                    window.open('https://calendly.com/theinsightfoundry/30min', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  Book Strategy Call
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-stone-100 via-stone-50 to-white overflow-hidden py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <HeroScrollDemo />
          </div>
        </section>

        {/* Text Reveal Section */}
        <section className="relative bg-white my-10">
          <TextRevealByWord text="First-principles strategy cuts through organizational complexity to unlock deep enterprise leverage." />
        </section>

        {/* Zoom Parallax Section */}
        <section className="pt-20 pb-0 bg-stone-100/50">
          <div className="max-w-4xl mx-auto text-center px-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4">Our Strategic Vision</h2>
            <p className="text-lg text-neutral-600">Scroll down to explore structural alignment, metric mapping, and business scaling architectures.</p>
          </div>
          <ZoomParallax images={consultingImages} />
        </section>

        {/* Strategy-Focused Workflow */}
        <section className="py-20 md:py-28 bg-white border-t border-stone-200/60">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-sm font-bold tracking-widest text-[#2c3e2d] uppercase mb-4">TIF Methodology</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900">How We Consult</h3>
              <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
                First-principles diagnostics to structure operations and select scale-ready systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {strategySteps.map((step, index) => (
                <Card key={index} className="border-none shadow-md bg-stone-50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded-xl bg-[#2c3e2d] flex items-center justify-center text-white">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-stone-200">{step.number}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-neutral-900">{step.title}</h4>
                    <p className="text-neutral-600">{step.description}</p>
                    <ul className="space-y-2 text-sm text-neutral-500 pt-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2c3e2d]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#2c3e2d]/5 p-4 rounded-lg text-xs italic text-neutral-700">
                      <span className="font-bold block not-italic text-[#2c3e2d] mb-1">Impact Study:</span>
                      {step.example}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Strategic Offerings */}
        <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-[#2c3e2d] uppercase mb-4">Core Competencies</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900">Strategic Alignment Domains</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6 md:p-10 space-y-4">
                  <h4 className="text-xl md:text-2xl font-bold text-neutral-950 flex items-center gap-3">
                    <Presentation className="w-6 h-6 text-[#2c3e2d]" />
                    Enterprise Operational Design
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    We audit existing human processes, identify bottlenecks in information flow, and redesign structural loops to ensure work scales smoothly without linear headcount growth.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-2 pt-2">
                    <li>• Structural communication blueprinting</li>
                    <li>• Tool stack optimization and cost audits</li>
                    <li>• Team bandwidth and labor efficiency maps</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6 md:p-10 space-y-4">
                  <h4 className="text-xl md:text-2xl font-bold text-neutral-950 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#2c3e2d]" />
                    Technology Selection & Alignment
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Most companies buy software they don't need. We formulate unbiased technological blueprint specifications, picking the ideal scalable frameworks and database models before you build.
                  </p>
                  <ul className="text-sm text-neutral-500 space-y-2 pt-2">
                    <li>• First-principles vendor evaluation</li>
                    <li>• Custom database and system architecture designs</li>
                    <li>• Transition risk mitigation and timelines</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Consulting Call to Action */}
        <section className="py-20 md:py-28 bg-[#2c3e2d] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="w-full h-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Architect Your Growth Blueprint?
            </h2>
            <p className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              Schedule a 30-minute diagnosis call where we'll audit your current workflows, point out scaling friction, and draft a high-level technical recommendation map.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-white hover:bg-stone-100 text-[#2c3e2d] px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex items-center gap-2"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Schedule Free Diagnostic Audit
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300"
                onClick={() => navigate('/automation')}
              >
                Explore Automation Systems
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

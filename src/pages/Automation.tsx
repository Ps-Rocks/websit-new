import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Youtube, ArrowRight, Bot, Mail, FileText, Workflow, BarChart3, Settings, Clock, CheckCircle, Brain, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SplineSceneBasic } from '@/components/ui/demo';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import CoreOffer from '../components/CoreOffer';
import WhyItMatters from '../components/WhyItMatters';
import Footer from '../components/Footer';
import Lenis from 'lenis';

export default function Automation() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'agents' | 'pipelines' | 'logs'>('agents');

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

  const systemLogs = [
    "[SYSTEM] Connection established with OpenAI API node...",
    "[PIPELINE] Document OCR engine fetched contract_901.pdf",
    "[AGENT] Lead classifier routed lead_401 to sales Slack channel",
    "[SYSTEM] Triggered daily CRM synchronization pipeline...",
    "[PIPELINE] Extracted metadata from email: 'Booking Request' -> Auto-Draft generated",
    "[AGENT] Appointment scheduler sync complete."
  ];

  return (
    <div className="dark min-h-screen bg-[#030303] text-stone-100 font-sans selection:bg-[#10b981]/20 selection:text-[#10b981]">
      
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/90 backdrop-blur-sm border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            
            <div 
              className="text-xl md:text-2xl font-black tracking-wider text-white cursor-pointer"
              onClick={() => navigate('/')}
            >
              TIF <span className="font-light text-[#10b981]">AUTOMATIONS</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button 
                variant="ghost"
                className="text-[#10b981] hover:bg-[#10b981]/10 hover:text-[#10b981] font-semibold"
                onClick={() => navigate('/consulting')}
              >
                TIF Consulting
              </Button>
              <Button 
                variant="ghost"
                className="text-stone-300 hover:bg-[#10b981]/10 hover:text-white font-medium"
                onClick={() => navigate('/about')}
              >
                About Us
              </Button>
              <Button 
                variant="ghost"
                className="text-stone-300 hover:bg-[#10b981]/10 hover:text-white font-medium"
                onClick={() => navigate('/blog')}
              >
                Blogs
              </Button>
              <Button 
                variant="ghost"
                className="text-stone-300 hover:bg-[#10b981]/10 hover:text-white font-medium"
                onClick={() => navigate('/careers')}
              >
                Careers
              </Button>
              <div className="flex items-center gap-3 border-l border-neutral-800 pl-4">
                <a 
                  href="https://www.linkedin.com/company/the-insight-foundry-official" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-[#10b981] transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/the_insight_foundry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-[#10b981] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="http://www.youtube.com/@TheInsightFoundry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-[#10b981] transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              
              <Button 
                className="bg-[#10b981] hover:bg-[#0d9468] text-neutral-950 font-bold rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Get Automation Audit
              </Button>
            </nav>

            <button
              className="md:hidden p-2 text-stone-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-neutral-900">
              <nav className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="ghost"
                  className="justify-start text-[#10b981] hover:bg-[#10b981]/10"
                  onClick={() => {
                    navigate('/consulting');
                    setMobileMenuOpen(false);
                  }}
                >
                  TIF Consulting
                </Button>
                <Button 
                  variant="ghost"
                  className="justify-start text-stone-300 hover:bg-[#10b981]/10 hover:text-white"
                  onClick={() => {
                    navigate('/about');
                    setMobileMenuOpen(false);
                  }}
                >
                  About Us
                </Button>
                <Button 
                  variant="ghost"
                  className="justify-start text-stone-300 hover:bg-[#10b981]/10 hover:text-white"
                  onClick={() => {
                    navigate('/blog');
                    setMobileMenuOpen(false);
                  }}
                >
                  Blogs
                </Button>
                <Button 
                  variant="ghost"
                  className="justify-start text-stone-300 hover:bg-[#10b981]/10 hover:text-white"
                  onClick={() => {
                    navigate('/careers');
                    setMobileMenuOpen(false);
                  }}
                >
                  Careers
                </Button>
                <div className="flex items-center gap-4 px-3 py-2">
                  <span className="text-sm text-stone-500">Follow:</span>
                  <a 
                    href="https://www.linkedin.com/company/the-insight-foundry-official" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-[#10b981] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/the_insight_foundry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-[#10b981] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="http://www.youtube.com/@TheInsightFoundry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-[#10b981] transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
                
                <Button 
                  className="mx-3 bg-[#10b981] hover:bg-[#0d9468] text-neutral-950 font-bold"
                  onClick={() => {
                    window.open('https://calendly.com/theinsightfoundry/30min', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Automation Audit
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-center max-w-3xl mx-auto space-y-4">
<h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
                Eliminate Repetitive Tasks, <span className="bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">Scale Operations</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-400">
                We engineer context-aware AI tools and deep integration workflows to unlock compounding productivity.
              </p>
            </div>
            
            <div className="rounded-3xl border border-neutral-900 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.05)]">
              <SplineSceneBasic />
            </div>
          </div>
        </section>

        {/* Text Reveal Section */}
        <section className="relative bg-transparent my-10">
          <TextRevealByWord text="We build the custom AI-powered pipelines and tools that eliminate repetitive tasks entirely." />
        </section>

        {/* Interactive Automation Control Room Mockup */}
        <section className="py-20 bg-neutral-950/60 border-t border-b border-neutral-900">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Systems Control Room</h2>
              <p className="text-neutral-400">Interact with the tabs below to visualize our live integration layers, active agents, and terminal outputs.</p>
            </div>

            <div className="border border-neutral-800 bg-[#070707] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.03)]">
              {/* Tab Header */}
              <div className="flex flex-wrap border-b border-neutral-800 bg-neutral-900/50 p-2 gap-1 md:gap-2">
                <button
                  onClick={() => setActiveTab('agents')}
                  className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'agents' ? 'bg-[#10b981]/15 text-[#10b981]' : 'text-stone-400 hover:text-white hover:bg-neutral-850'}`}
                >
                  Active AI Agents
                </button>
                <button
                  onClick={() => setActiveTab('pipelines')}
                  className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'pipelines' ? 'bg-[#10b981]/15 text-[#10b981]' : 'text-stone-400 hover:text-white hover:bg-neutral-850'}`}
                >
                  Integration Pipelines
                </button>
                <button
                  onClick={() => setActiveTab('logs')}
                  className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'logs' ? 'bg-[#10b981]/15 text-[#10b981]' : 'text-stone-400 hover:text-white hover:bg-neutral-850'}`}
                >
                  Terminal Logs
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-8 min-h-[300px]">
                {activeTab === 'agents' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 border border-neutral-800/80 bg-neutral-950/60 rounded-xl space-y-3 relative overflow-hidden">
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                      <div className="flex items-center gap-3">
                        <Bot className="text-[#10b981] w-5 h-5" />
                        <h4 className="font-bold text-white text-md">Customer Inquiry Triage Agent</h4>
                      </div>
                      <p className="text-xs text-stone-400">Scans client emails, determines sentiment, pulls account context, and auto-drafts replies inside Zendesk/Slack.</p>
                      <div className="text-[10px] text-emerald-400/85 font-mono">STATUS: Active (Processed 180 tasks today)</div>
                    </div>

                    <div className="p-5 border border-neutral-800/80 bg-neutral-950/60 rounded-xl space-y-3 relative overflow-hidden">
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                      <div className="flex items-center gap-3">
                        <Bot className="text-[#10b981] w-5 h-5" />
                        <h4 className="font-bold text-white text-md">Intelligent PDF Reader Agent</h4>
                      </div>
                      <p className="text-xs text-stone-400">Extracts complex financial tables, compares terms across contracts, and checks metadata variations.</p>
                      <div className="text-[10px] text-emerald-400/85 font-mono">STATUS: Running (Accuracy 99.4%)</div>
                    </div>
                  </div>
                )}

                {activeTab === 'pipelines' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 border border-neutral-800/80 bg-neutral-950/40 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Mail className="text-[#10b981] w-5 h-5 shrink-0" />
                        <span className="text-sm font-semibold">Outlook Email Triage → Airtable Database Sync</span>
                      </div>
                      <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded self-start sm:self-auto">CONNECTED</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 border border-neutral-800/80 bg-neutral-950/40 rounded-xl">
                      <div className="flex items-center gap-3">
                        <FileText className="text-[#10b981] w-5 h-5 shrink-0" />
                        <span className="text-sm font-semibold">DocuSign Webhook → Slack Channel Alerts</span>
                      </div>
                      <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded self-start sm:self-auto">CONNECTED</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 border border-neutral-800/80 bg-neutral-950/40 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Workflow className="text-[#10b981] w-5 h-5 shrink-0" />
                        <span className="text-sm font-semibold">Stripe Checkout Hook → Hubspot CRM Lead Updates</span>
                      </div>
                      <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded self-start sm:self-auto">CONNECTED</span>
                    </div>
                  </div>
                )}

                {activeTab === 'logs' && (
                  <div className="font-mono text-xs text-[#10b981]/90 space-y-2 bg-[#020202] p-4 rounded-xl border border-neutral-900">
                    {systemLogs.map((log, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-neutral-600">[{10 + index}:42:0{index}]</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Core Offers */}
        <div className="bg-[#050505] text-stone-100 border-b border-neutral-900">
          <CoreOffer />
        </div>

        {/* Benefits (Why It Matters) */}
        <div className="bg-[#030303] border-b border-neutral-900">
          <WhyItMatters />
        </div>

        {/* CTA section (dark mode styled) */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-neutral-900 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Save 20+ Hours per Week?
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Book a free automation diagnostic call. We will discuss your manual workloads and trace a direct roadmap to automated systems.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-[#10b981] hover:bg-[#0d9468] text-neutral-950 px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group flex items-center gap-2"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Schedule Free Automation Audit
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline"
                className="border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300"
                onClick={() => navigate('/consulting')}
              >
                Learn About Strategy Consulting
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="dark" />
    </div>
  );
}

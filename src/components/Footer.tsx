import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  variant?: 'dark' | 'light';
}

const Footer = ({ variant = 'light' }: FooterProps) => {
  const isDark = variant === 'dark';
  const email = 'theinsightfoundry@gmail.com';

  const linkCls = isDark
    ? 'text-white/50 hover:text-white transition-colors duration-200'
    : 'text-black/50 hover:text-black/90 transition-colors duration-200';

  const sectionLabelColor = isDark ? 'rgba(255,255,255,0.26)' : 'rgba(0,0,0,0.3)';
  const dividerColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';
  const bottomTextColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.26)';
  const taglineColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  const estColor = isDark ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.18)';
  const bgColor = isDark ? '#0c0c0c' : '#f7f7f5';
  const nameColor = isDark ? '#ffffff' : '#111111';
  const accentColor = isDark ? '#10b981' : '#2c3e2d';
  const wordmarkColor = isDark ? 'rgba(255,255,255,0.028)' : 'rgba(0,0,0,0.04)';

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: bgColor }}>

      {/* Oversized background wordmark */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none flex items-end justify-center overflow-hidden"
        aria-hidden="true"
      >
        <p
          className="font-black uppercase text-center w-full"
          style={{
            fontSize: 'clamp(9rem,21vw,24rem)',
            color: wordmarkColor,
            lineHeight: 0.82,
            letterSpacing: '-0.02em',
            marginBottom: '-0.06em',
          }}
        >
          FOUNDRY
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-10 pb-0">

        {/* Top grid: brand / studio / contact */}
        <div className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr] gap-8 md:gap-12 pb-8">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-3.5 h-3.5 rotate-45 flex-shrink-0"
                style={{ backgroundColor: accentColor }}
              />
              <span
                className="font-black tracking-tight text-base"
                style={{ color: nameColor }}
              >
                The Insight Foundry
              </span>
            </div>

            <p
              className="leading-relaxed mb-5"
              style={{
                color: taglineColor,
                maxWidth: '30ch',
                fontSize: '0.8rem',
              }}
            >
              We build intelligent systems for businesses ready to outgrow their headcount.
            </p>

            <p
              className="font-bold uppercase"
              style={{
                fontSize: '0.58rem',
                letterSpacing: '0.28em',
                color: estColor,
              }}
            >
              Est. 2024
            </p>
          </div>

          {/* Studio */}
          <div>
            <p
              className="font-bold uppercase mb-5"
              style={{ fontSize: '0.58rem', letterSpacing: '0.24em', color: sectionLabelColor }}
            >
              Studio
            </p>
            <nav className="flex flex-col gap-3">
              <Link to="/consulting" className={`text-xs font-medium ${linkCls}`}>
                TIF Consulting
              </Link>
              <Link to="/automation" className={`text-xs font-medium ${linkCls}`}>
                TIF Automations
              </Link>
              <Link to="/about" className={`text-xs font-medium ${linkCls}`}>
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="font-bold uppercase mb-5"
              style={{ fontSize: '0.58rem', letterSpacing: '0.24em', color: sectionLabelColor }}
            >
              Contact
            </p>
            <nav className="flex flex-col gap-3">
              <a href={`mailto:${email}`} className={`text-xs font-medium ${linkCls}`}>
                {email}
              </a>
              <a
                href="https://www.linkedin.com/company/the-insight-foundry-official"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium ${linkCls}`}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/the_insight_foundry"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium ${linkCls}`}
              >
                Instagram
              </a>
              <a
                href="http://www.youtube.com/@TheInsightFoundry"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium ${linkCls}`}
              >
                YouTube
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-2"
          style={{ borderTop: `1px solid ${dividerColor}` }}
        >
          <div className="flex items-center gap-4">
            <p style={{ fontSize: '0.62rem', color: bottomTextColor }}>
              © 2026 The Insight Foundry. All rights reserved.
            </p>
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200"
              style={{ fontSize: '0.62rem', color: bottomTextColor }}
            >
              Privacy Policy
            </Link>
          </div>

          <p
            className="font-bold uppercase"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.16)',
            }}
          >
            Built With Intention
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

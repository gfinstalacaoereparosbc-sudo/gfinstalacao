import React from 'react';
import { STATS } from '../constants';
import FadeIn from './ui/FadeIn';

const Stats: React.FC = () => {
  return (
    <section className="bg-background-default border-b border-white/5 py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <FadeIn key={index} delay={index * 150} className="flex flex-col items-center md:items-start relative group">
              {/* Divider for desktop except first item */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-px h-12 bg-white/10" />
              )}
              
              <span className="font-heading font-bold text-4xl md:text-5xl text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                {stat.value}
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-text-secondary">
                {stat.label}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
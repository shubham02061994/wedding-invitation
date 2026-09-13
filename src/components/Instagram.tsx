import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Instagram: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-ivory-light border-y border-gold/20 text-center">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-ivory gold-border shadow-md"
        >
          <Camera className="w-8 h-8 text-maroon mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-maroon-dark mb-2">Share the Joy</h3>
          <p className="text-xs sm:text-sm text-brown/70 mb-6">
            Capture and share your cherished moments of our celebration using our official wedding hashtag.
          </p>
          <div className="inline-block px-6 py-3 bg-maroon text-gold text-sm tracking-[0.25em] font-serif gold-border">
            {weddingData.couple.hashtag}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
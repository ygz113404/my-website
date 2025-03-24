'use client'; // Bileşen istemci tarafında çalışacak

import React from 'react';

interface ContactProps {
  title: string;
  description: string;
  linkedin: string;
  github: string;
  emailAddress: string;
}

const Contact = ({
  title,
  description,
  linkedin,
  github,
  emailAddress
}: ContactProps) => {
  return (
    <section id="contact" className="snap-start h-screen flex flex-col items-center justify-center text-white text-2xl p-6">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-4 text-lg">{description}</p>
      
      <div className="flex gap-8 mb-6">
        <a 
          href={`mailto:${emailAddress}`} 
          className="text-xl hover:text-red-500 transition-colors"
        >
          Email
        </a>
        <a 
           href={`https://${linkedin}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-500 transition-colors"
        >
          LinkedIn
        </a>
        <a 
           href={`https://${github}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400 transition-colors"
        >
          GitHub
        </a>
      </div>
      
      <div className="text-center">
        <p className="text-lg">{description} <strong>{emailAddress}</strong></p>
      </div>
    </section>
  );
};

export default Contact;

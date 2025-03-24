"use client";
import { useState } from "react";
import Hero from "../app/components/Hero";
import LanguageSwitcher from "../app/components/LanguageSwitcher";
import About from "../app/components/About";
import texts from "./locales/texts";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  // Dil durumu state
  const [locale, setLocale] = useState<'tr' | 'en'>('tr');

  // Dil değiştirildiğinde metinleri değiştiren fonksiyon
  const switchLocale = (locale: 'tr' | 'en') => {
    setLocale(locale);
  };



  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth relative">
      <LanguageSwitcher switchLocale={switchLocale} />
      <Hero />
      <About title={texts[locale].about.title} content={texts[locale].about.content} />
      <Projects></Projects>
      <Contact
        title={texts[locale].contact.title}
        description={texts[locale].contact.description}
        linkedin={texts[locale].contact.linkedin}
        github={texts[locale].contact.github}
        emailAddress={texts[locale].contact.emailAddress}
      />
    </main>
  );
}

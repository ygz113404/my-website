"use client";

type LanguageSwitcherProps = {
  switchLocale: (locale: 'tr' | 'en') => void;
};

export default function LanguageSwitcher({ switchLocale }: LanguageSwitcherProps) {
  return (
    <div className="fixed top-5 right-5 z-50 space-x-2">
      <button
        onClick={() => switchLocale('tr')}
        className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 text-sm"
      >
        🇹🇷 Türkçe
      </button>
      <button
        onClick={() => switchLocale('en')}
        className="px-3 py-1 bg-white text-black rounded hover:bg-gray-200 text-sm"
      >
        🇺🇸 English
      </button>
    </div>
  );
}

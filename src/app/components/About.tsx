"use client";

type AboutProps = {
  title: string;
  content: string;
};

export default function About({ title, content }: AboutProps) {
  return (
    <section className="snap-start h-screen flex flex-col items-center justify-center text-white text-2xl p-6">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg max-w-3xl leading-relaxed">{content}</p>
    </section>
  );
}

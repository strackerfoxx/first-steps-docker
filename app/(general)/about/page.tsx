import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page','Fernando','información','...'],
};


export default function AboutPage() {
  return (
      <>
        <span className="text-7xl">About Page</span>
        <Image src="Coconut-for-Babies-scaled.webp" alt="coconut"/>
      </>
  )
}

// frontend/src/components/HeroSection.tsx
import "../styles/HeroSection.css";
import Image from "next/image";
import hero from "@/assets/hero.jpg";
export default function HeroSection() {
  return (
    <section className="hero">
        <Image src={hero} alt="Hero" className="hero-image" />
    </section>
  );
}

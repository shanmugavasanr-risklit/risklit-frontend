"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScannerForm from "@/components/ScannerForm";
import LandingPage from "@/components/LandingPage";
import FreeReportsPromo from "@/components/FreeReportsPromo";
//import AlertSection from "@/components/AlertSection"; <AlertSection />
// import Footer from "@/components/Footer"; <Footer />

export default function Home() {
  return (
    <>
      <Navbar />
      <FreeReportsPromo />
      <HeroSection />
      <LandingPage />
    </>
  );
}

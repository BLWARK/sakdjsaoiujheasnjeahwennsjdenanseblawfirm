import React from 'react';
import HeroSection from '@/components/page-components/hero-sect/Hero-sect';
import AboutUs from "@/components/page-components/aboutus-sect/AboutUs"
import Services from "@/components/page-components/services/Services"
import WhyUs from "@/components/page-components/WhyUs-sect/WhyUs"
import Teams from "@/components/page-components/Our-Teams/Teams"
import SuccesCase from "@/components/page-components/success-case/SuccessCase"
import Layanan from "@/components/page-components/Layanan/Layanan";

import CTA from "@/components/page-components/call-to-action/CallToAction"

const Page = () => {
  return (
    <main className="w-full h-full">
      {/* Hero Section */}
      <HeroSection />
      
      
      {/* Section Tambahan di Bawahnya */}
      
       <AboutUs/>
       <WhyUs/>
       <Services/>
       <Teams/>
       <SuccesCase/>
       <Layanan/>
       {/* <CaraPembayaran/> */}
       <CTA/>



      
    </main>
  );
};

export default Page;

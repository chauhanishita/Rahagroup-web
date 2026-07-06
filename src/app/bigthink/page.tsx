import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BigThink() {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden animate-fade-up">
          <div className="relative z-10 px-6 md:px-20 max-w-[1280px] mx-auto w-full">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-8">
                <span className="font-inter text-xs font-bold text-secondary uppercase block mb-4 tracking-[0.2em]">Big Think Technology</span>
                <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-black">
                  Innovating Today, Empowering Tomorrow
                </h1>
                <p className="font-inter text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed">
                  Big Think Technology delivers innovative IT solutions that help businesses accelerate digital transformation, improve operational efficiency, and stay ahead in a competitive market. We specialize in developing reliable, scalable, and customized technology solutions tailored to meet the unique needs of startups, SMEs, and enterprises. Our team combines technical expertise with creative problem-solving to provide high-quality software, web, mobile, cloud, and digital solutions that drive measurable business growth.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/#contact" className="bg-black text-white px-8 py-4 rounded-lg font-inter text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all text-center">
                    Explore Solutions
                  </Link>
                  <Link href="/about" className="border border-black text-black px-8 py-4 rounded-lg font-inter text-sm font-bold uppercase tracking-widest hover:bg-[#efeeeb] transition-all text-center">
                    Our Vision
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capability areas */}
        <section className="py-20 md:py-28 px-6 md:px-20 max-w-[1280px] mx-auto bg-[#efeeeb]/50 rounded-2xl">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <span className="font-inter text-xs font-bold text-secondary uppercase block mb-4 tracking-[0.15em]">Our Core Expertise</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">Key Highlights</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">terminal</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Custom Software Development</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">Scalable, bespoke codebases tailored to specific enterprise processes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">devices</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Website &amp; Mobile App Development</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">High-performance digital products built with React, Next.js, and Native SDKs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">cloud</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Cloud Solutions &amp; IT Consulting</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">Secure data migrations, infrastructure setup, and process optimization.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">palette</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">UI/UX Design &amp; Digital Innovation</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">User-centric mockups and interactions that ensure maximum engagement.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">psychology</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">AI &amp; Automation Solutions</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">Predictive analytics integration, neural modeling, and automatic intelligence.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">security</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Cybersecurity &amp; System Support</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">End-to-end security audits, data encryption, and system maintenance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">settings_suggest</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Business Process Automation</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">Workflows designed to eliminate manual data entries and optimize speeds.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">dns</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">End-to-End Technology Services</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">Complete life-cycle management from initial analysis to final deployments.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

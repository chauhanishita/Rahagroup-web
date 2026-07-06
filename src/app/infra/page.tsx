import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Infra() {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Header Hero Section */}
        <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden animate-fade-up">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center brightness-[0.8]" 
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATUQpdHTQHJLJ1f5OOunj3n6b45BdHBBb2bgimyHcXLkp1j3UjrQFVMaFea6jdhx8zo3eYBBYeffft6Mm-ir2hYacSDdvpruptOteZMycn4U2JisZeB9iWfjBnrhgapuvRB6afRc3llTvljxh87oLwn_ZQSXC41tXAPeGmO_h3Czr_qwbX3KGl9oSNehPoYVSz8OmIXVwTqMAvE0EkQo2M7cSOJtfIbhkJVLLJOLBZbCGl3fZoTyNG')",
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          
          <div className="relative z-10 text-center px-6 md:px-20 max-w-4xl">
            <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase mb-4 block tracking-[0.2em]">Excellence in Structure</span>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Building Trust, Delivering Dreams
            </h1>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Raha Infra is a trusted real estate company committed to delivering premium residential and commercial property solutions. With a customer-centric approach and in-depth market expertise, we help individuals, families, and investors find the right property that matches their needs and long-term goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-[#735b28] text-white px-8 py-4 rounded-lg font-inter text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all text-center">
                Explore Projects
              </Link>
              <Link href="/about" className="border border-white text-white px-8 py-4 rounded-lg font-inter text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center">
                Our Vision
              </Link>
            </div>
          </div>
        </header>

        {/* Highlights Section */}
        <section className="py-20 md:py-28 bg-[#efeeeb]/50">
          <div className="max-w-[1280px] mx-auto px-6 md:px-20">
            <div className="mb-16 text-center">
              <span className="font-inter text-xs font-bold text-[#735b28] uppercase block mb-4 tracking-[0.2em]">Core Competencies</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">
                Raha Infra Highlights
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4">apartment</span>
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Residential &amp; Commercial Properties</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Premium housing, office environments, and retail complexes tailored to customer needs.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4">real_estate_agent</span>
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Property Buying &amp; Selling</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Assisted transactions ensuring absolute transparency and valuation security.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4">analytics</span>
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Investment Advisory</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">High-yield projections backed by real market analytics and portfolio management.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4">verified</span>
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Verified Property Listings</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Strict regulatory clearance and verification process for listings.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4">description</span>
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">End-to-End Documentation Support</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Complete assistance through registration, clearance, and legal processes.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4">support_agent</span>
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Customer-Centric Services</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Dedicated relationship executives managing all touchpoints for absolute comfort.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
